/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from '@web-stories-wp/react';
import { useSnackbar } from '@web-stories-wp/design-system';

/**
 * Internal dependencies
 */
import { allowedMimeTypes, maxUpload } from '../../consts';
import MediaContext from './context';
import {
  getDummyMedia,
  getResourceFromLocalFile,
  usePersistentAssets,
} from './utils';

function MediaProvider({ children }) {
  const [media, updateMedia] = useState([]);

  const loadMockedFiles = useCallback(() => {
    updateMedia(getDummyMedia());
  }, []);

  const { showSnackBar } = useSnackbar();

  const allowedMimeTypesArray = useMemo(() => {
    return [...allowedMimeTypes.image, ...allowedMimeTypes.video];
  }, []);

  const addLocalFiles = useCallback(
    async (files) => {
      const mediaItems = [...media];

      const isValidFile = (file) => {
        if (!allowedMimeTypesArray.includes(file.type)) {
          throw new Error({ message: 'Invalid file type' });
        }

        if (file.size > maxUpload) {
          throw new Error({ message: 'Max Upload Limit Exceeded' });
        }
      };

      await Promise.all(
        [...files].map(async (file) => {
          try {
            isValidFile(file);
            const { resource: mediaData } = await getResourceFromLocalFile(
              file
            );
            mediaData.local = false; // this disables the UploadingIndicator
            mediaData.id = uuidv4();
            mediaData.file = file;
            mediaData.modifiedAt = new Date().getTime();
            mediaItems.push(mediaData);
          } catch (e) {
            showSnackBar({
              message: e.message,
            });
          }
        })
      );

      updateMedia(mediaItems);
      return {
        data: mediaItems,
        headers: {
          totalItems: mediaItems.length,
          totalPages: 1,
        },
      };
    },
    [allowedMimeTypesArray, media, updateMedia, showSnackBar]
  );

  const getMedia = () => {
    return Promise.resolve({
      data: media,
      headers: {
        totalItems: media.length,
        totalPages: 1,
      },
    });
  };

  usePersistentAssets({
    addLocalFiles,
    media,
  });

  const value = {
    actions: {
      updateMedia,
      getMediaCallback: getMedia,
      updateMediaCallback: addLocalFiles,
    },

    state: {
      media,
    },
  };
  return (
    <MediaContext.Provider value={value}>{children}</MediaContext.Provider>
  );
}

MediaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MediaProvider;