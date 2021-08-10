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
import { _x } from '@web-stories-wp/i18n';
import PropTypes from 'prop-types';

const title = _x('Violet Lotus', 'sticker name', 'web-stories');

function VioletLotus({ style }) {
  return (
    <svg
      style={style}
      viewBox="0 0 48 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path
        d="M1.87691 27.4697C1.99929 27.5473 2.11123 27.6249 2.22914 27.6921C3.53508 28.4279 4.91565 28.9801 6.3589 29.3741C7.54991 29.6995 8.75735 29.9413 9.98717 30.0666C11.42 30.2114 12.8543 30.2502 14.2945 30.1487C15.0811 30.0935 15.8632 30.0055 16.6408 29.8831C17.4855 29.7487 18.3228 29.5652 19.1467 29.3293C19.8049 29.1413 20.4586 28.9353 21.0944 28.6801C21.1899 28.6413 21.2824 28.5995 21.3735 28.5503C21.3944 28.5398 21.4018 28.498 21.4063 28.4697C21.4078 28.4607 21.3839 28.4398 21.3705 28.4368C21.2541 28.413 21.1377 28.3846 21.0183 28.3741C19.2213 28.207 17.4706 27.8174 15.7617 27.2354C14.1184 26.6757 12.5513 25.9473 11.0722 25.0339C9.41405 24.0086 7.90811 22.7937 6.58128 21.3609C4.88132 19.5266 3.54553 17.455 2.66197 15.0998C2.08288 13.5581 1.72169 11.9671 1.62617 10.3178C1.6008 9.8701 1.59035 9.42235 1.57841 8.97459C1.57542 8.85519 1.58289 8.73132 1.60677 8.6149C1.65751 8.37759 1.80079 8.20894 2.03661 8.14775C2.18437 8.11044 2.34108 8.08805 2.49182 8.08954C3.05599 8.09252 3.62165 8.09551 4.18581 8.12237C6.74247 8.24774 9.19615 8.83131 11.5498 9.83278C13.2587 10.5596 14.8647 11.476 16.3721 12.567C16.5109 12.667 16.6527 12.7641 16.7945 12.8596C16.8527 12.8984 16.9363 12.8536 16.9452 12.7805C17.0124 12.2671 17.0646 11.7521 17.1467 11.2432C17.3288 10.1164 17.6452 9.02683 18.0512 7.95969C18.481 6.82837 19.0243 5.75526 19.6675 4.7329C20.469 3.45979 21.4168 2.30609 22.4899 1.25686C22.8212 0.932987 23.1719 0.628516 23.5152 0.316583C23.5913 0.247928 23.6689 0.17778 23.7555 0.12405C24.0092 -0.0341556 24.2734 -0.0431104 24.5331 0.109125C24.6062 0.152408 24.6734 0.20763 24.7391 0.262853C26.4152 1.68819 27.8286 3.3389 28.9435 5.24334C29.8001 6.70748 30.4509 8.25968 30.8583 9.91189C31.0359 10.6313 31.1762 11.3596 31.2509 12.0984C31.2628 12.2163 31.2956 12.3342 31.321 12.4506C31.3285 12.4879 31.4165 12.5163 31.4524 12.4939C31.5523 12.4282 31.6538 12.3641 31.7509 12.2939C33.118 11.3014 34.5806 10.482 36.1388 9.83726C37.2 9.39697 38.2895 9.04026 39.4059 8.76714C40.4551 8.50893 41.5163 8.31939 42.5894 8.20596C43.6968 8.08805 44.8088 8.04178 45.9222 8.09402C46.0416 8.09999 46.1625 8.11342 46.2759 8.14625C46.5296 8.21939 46.6774 8.397 46.7236 8.65818C46.7356 8.72535 46.7371 8.79549 46.7371 8.86415C46.7326 9.26115 46.7416 9.65816 46.7177 10.0537C46.6401 11.3492 46.4311 12.6223 46.0625 13.867C45.4311 16.0073 44.4252 17.955 43.0879 19.7296C41.6447 21.643 39.9178 23.2504 37.9328 24.5787C36.5298 25.5175 35.0418 26.2906 33.4747 26.9055C32.0359 27.4697 30.5509 27.8757 29.0285 28.1413C28.439 28.2443 27.8465 28.3338 27.248 28.3771C27.1465 28.3846 27.0465 28.4115 26.9465 28.4324C26.9331 28.4353 26.9122 28.4577 26.9122 28.4682C26.9151 28.4965 26.9211 28.5383 26.9405 28.5488C27.0151 28.5906 27.0928 28.6294 27.1719 28.6577C27.5898 28.81 28.0062 28.9697 28.43 29.1055C29.4091 29.4189 30.4061 29.6667 31.4195 29.8413C32.9255 30.101 34.4448 30.2084 35.9702 30.1666C37.9985 30.1114 39.9895 29.7935 41.9267 29.1711C43.1043 28.7935 44.2341 28.3025 45.3132 27.6966C45.4162 27.6383 45.5132 27.5652 45.6073 27.4936C45.6207 27.4831 45.6177 27.4219 45.6028 27.407C45.555 27.3592 45.4998 27.316 45.4401 27.2846C45.0177 27.0563 44.6013 26.8175 44.17 26.607C42.9327 26.0055 41.6417 25.5548 40.3029 25.2414C40.1701 25.21 40.0357 25.1787 39.9029 25.1444C39.8372 25.128 39.7701 25.11 39.7074 25.0847C39.4686 24.9906 39.3268 24.7668 39.3432 24.5175C39.3596 24.2757 39.5387 24.0713 39.788 24.0086C39.9596 23.9653 40.1283 23.9832 40.2969 24.022C40.5805 24.0877 40.8641 24.1519 41.1447 24.228C42.47 24.5847 43.7565 25.0533 44.9864 25.6712C45.7222 26.0414 46.4371 26.4488 47.1192 26.9115C47.2042 26.9697 47.2893 27.0264 47.3684 27.0936C47.5177 27.219 47.5565 27.4264 47.4788 27.6115C47.4311 27.7249 47.3624 27.8234 47.2699 27.9025C47.1789 27.9801 47.0818 28.0518 46.9818 28.1174C45.7162 28.9547 44.361 29.607 42.9327 30.1099C41.6029 30.5771 40.2417 30.9099 38.8492 31.1099C37.7806 31.2636 36.7075 31.3621 35.6269 31.3577C34.7359 31.3547 33.8478 31.3338 32.9598 31.2457C31.8509 31.1353 30.7539 30.9562 29.6703 30.695C28.2688 30.3577 26.9062 29.9025 25.5928 29.3025C25.2809 29.1607 24.9764 29.0025 24.6704 28.8503C24.548 28.7891 24.4256 28.7249 24.3048 28.6607C24.2048 28.607 24.1063 28.6174 24.0092 28.6652C23.7645 28.7876 23.5212 28.9159 23.2764 29.0368C21.7168 29.8055 20.084 30.3607 18.3929 30.7517C17.49 30.9592 16.5796 31.1174 15.6617 31.2218C14.2662 31.3786 12.8647 31.4442 11.4588 31.3756C10.3976 31.3248 9.34241 31.2218 8.29467 31.0472C6.25741 30.7069 4.29924 30.1069 2.4366 29.201C1.75751 28.8697 1.10529 28.4921 0.475449 28.0742C0.362019 27.9995 0.253066 27.91 0.163516 27.81C0.0978459 27.7354 0.0485931 27.6369 0.0202355 27.5398C-0.0260321 27.3816 0.00531051 27.2294 0.132173 27.1145C0.208291 27.0458 0.291871 26.9831 0.375451 26.9249C1.09484 26.4234 1.84557 25.9772 2.62764 25.5847C3.8888 24.9518 5.20519 24.4683 6.56934 24.1235C6.88426 24.0429 7.20365 23.9787 7.52156 23.9131C7.63797 23.8892 7.75886 23.8757 7.87826 23.8772C8.17676 23.8802 8.39467 24.0489 8.49168 24.3384C8.55885 24.5369 8.48124 24.7712 8.3096 24.8877C8.19467 24.9668 8.06483 25.0071 7.9305 25.0384C7.46335 25.1459 6.9947 25.2444 6.53203 25.3697C5.03654 25.7757 3.62015 26.3742 2.2769 27.1473C2.17243 27.207 2.06944 27.2682 1.97243 27.3384C1.93362 27.3607 1.91422 27.413 1.87691 27.4697ZM30.124 14.3461C30.1255 13.1208 30.0225 11.9909 29.7972 10.8701C29.4897 9.33876 28.9688 7.88357 28.2569 6.49704C27.9897 5.97615 27.7062 5.46423 27.4211 4.95379C27.051 4.29261 26.6614 3.64337 26.1987 3.04189C25.9793 2.75683 25.739 2.48519 25.4988 2.21803C25.3256 2.0255 25.1212 1.86879 24.8958 1.73894C24.5824 1.55835 24.2585 1.51208 23.9092 1.63297C23.5958 1.74192 23.3242 1.91804 23.0734 2.12848C22.7705 2.3837 22.5018 2.67324 22.2511 2.9807C21.7824 3.55382 21.372 4.16873 20.9884 4.80305C20.0825 6.29704 19.3526 7.86865 18.8631 9.5507C18.4721 10.8984 18.2556 12.2745 18.1989 13.676C18.1586 14.6789 18.2347 15.6744 18.378 16.667C18.5541 17.8848 18.8646 19.0639 19.2959 20.2131C19.9675 21.9997 20.9048 23.6384 22.0361 25.1682C22.3332 25.5697 22.6555 25.9518 23.0331 26.2787C23.2018 26.4234 23.3794 26.5608 23.569 26.6757C23.7137 26.7637 23.8764 26.8279 24.0406 26.8742C24.266 26.9384 24.4779 26.8996 24.6674 26.7443C24.9212 26.5369 25.1525 26.3055 25.3629 26.0578C25.742 25.613 26.1167 25.1653 26.4808 24.7071C27.5241 23.3907 28.3405 21.9385 28.9584 20.3743C29.7345 18.4117 30.1375 16.3774 30.124 14.3461ZM26.5853 27.2458C26.7838 27.2294 27.0569 27.213 27.3286 27.1831C27.6181 27.1518 27.9062 27.1145 28.1942 27.0712C29.6688 26.8428 31.1165 26.4966 32.5225 25.9891C35.3463 24.9697 37.8746 23.4593 40.0522 21.3683C41.2611 20.2072 42.2984 18.9087 43.1625 17.4684C44.367 15.4595 45.1147 13.2954 45.364 10.9611C45.3893 10.7223 45.3893 10.479 45.3938 10.2387C45.3968 10.082 45.364 9.93129 45.3117 9.78204C45.2386 9.57309 45.0983 9.42981 44.8938 9.35667C44.7983 9.32235 44.6968 9.29548 44.5953 9.28653C44.3744 9.26712 44.1506 9.24474 43.9297 9.2522C43.5192 9.26713 43.1088 9.2925 42.6999 9.33429C41.7969 9.42832 40.9029 9.58055 40.0178 9.78502C38.0522 10.2417 36.197 10.976 34.4389 11.97C33.5105 12.4939 32.6299 13.0894 31.8091 13.77C31.321 14.1745 31.3941 14.0446 31.3747 14.6789C31.3494 15.5252 31.2807 16.3655 31.1404 17.1998C30.7927 19.2624 30.0897 21.1952 29.0614 23.0086C28.242 24.4533 27.245 25.7653 26.0853 26.9518C26.0495 26.9891 26.0137 27.0249 25.9779 27.0622C25.9032 27.1413 25.8734 27.2204 25.9107 27.2384C25.954 27.2593 26.0017 27.2801 26.0465 27.2787C26.2032 27.2742 26.3555 27.2607 26.5853 27.2458ZM16.8393 14.5148C16.7407 14.367 16.593 14.2745 16.4587 14.1685C15.3363 13.2864 14.1647 12.479 12.9155 11.7924C11.7259 11.1387 10.4857 10.6014 9.19615 10.179C7.80662 9.72234 6.37681 9.46563 4.92609 9.32085C4.62013 9.291 4.31118 9.2925 4.00373 9.29399C3.85149 9.29548 3.69478 9.31638 3.54702 9.35071C3.23658 9.42533 3.04106 9.62085 2.97091 9.94174C2.91718 10.1805 2.91569 10.4208 2.9336 10.6626C2.98882 11.3865 3.10375 12.0999 3.26345 12.8073C3.64254 14.4879 4.3067 16.0491 5.18877 17.5222C6.47083 19.6624 8.13647 21.4489 10.114 22.9459C11.3916 23.9131 12.7722 24.7056 14.2304 25.3608C15.8318 26.0802 17.4974 26.5951 19.2213 26.9085C19.8108 27.016 20.4048 27.0966 20.9989 27.1682C21.4406 27.2204 21.8854 27.2398 22.3287 27.2697C22.3511 27.2712 22.3899 27.2369 22.3973 27.2115C22.4063 27.1846 22.3973 27.1413 22.3794 27.119C22.3257 27.0518 22.2645 26.9906 22.2048 26.9294C21.3854 26.0921 20.6451 25.1891 19.9899 24.216C18.975 22.7071 18.1944 21.0848 17.6542 19.3445C17.2169 17.9371 16.9706 16.4983 16.8885 15.0282C16.8796 14.8565 16.89 14.6819 16.8393 14.5148Z"
        fill="#380E63"
      />
      <path
        d="M12.0021 1.91207C11.9065 1.9658 11.8692 2.06431 11.8245 2.15684C11.3946 3.0419 11.0543 3.95979 10.8096 4.9135C10.5558 5.90004 10.4006 6.903 10.3648 7.92388C10.3618 8.02686 10.3588 8.13133 10.3454 8.23282C10.3051 8.52088 10.0932 8.73281 9.80659 8.77759C9.64988 8.80147 9.50063 8.78356 9.35884 8.70446C9.16481 8.597 9.03944 8.44028 9.03944 8.21193C9.03944 7.95373 9.04541 7.69552 9.06482 7.43732C9.23795 5.20901 9.84092 3.10608 10.8812 1.13149C10.929 1.04045 10.9737 0.946425 11.0275 0.858367C11.1304 0.688222 11.2872 0.582253 11.4782 0.541956C11.5752 0.521061 11.6827 0.52703 11.7812 0.54494C11.8976 0.565835 12.011 0.609118 12.1244 0.647923C14.4751 1.45388 16.6408 2.60758 18.6034 4.14486C18.6974 4.21799 18.79 4.29709 18.8691 4.38664C19.0034 4.53589 19.0094 4.74335 18.9049 4.9135C18.7527 5.16424 18.3333 5.38811 17.9586 5.1717C17.8109 5.08663 17.6751 4.97917 17.5392 4.87618C16.6512 4.20008 15.7199 3.59114 14.7319 3.07175C13.9587 2.66429 13.1662 2.30012 12.3453 1.99715C12.2498 1.96133 12.1498 1.93595 12.0528 1.9076C12.0379 1.90312 12.02 1.91058 12.0021 1.91207Z"
        fill="#380E63"
      />
      <path
        d="M36.203 1.8957C36.1105 1.92406 36.0269 1.94346 35.9478 1.9748C34.1344 2.67628 32.4255 3.57327 30.8494 4.72399C30.6688 4.85533 30.4897 4.98667 30.3046 5.11055C29.9822 5.32696 29.4942 5.19861 29.2957 4.90458C29.1703 4.71802 29.1778 4.49862 29.336 4.33893C29.4076 4.26579 29.4897 4.20162 29.5718 4.13893C31.4509 2.73001 33.4851 1.61063 35.6896 0.807664C35.9149 0.725576 36.1403 0.646473 36.3642 0.5614C36.691 0.437523 37.0642 0.625578 37.2 0.891243C37.3328 1.15094 37.4671 1.41213 37.591 1.67779C38.1955 2.98075 38.6343 4.33743 38.9029 5.74934C39.0119 6.32545 39.088 6.90603 39.1372 7.49109C39.1492 7.6284 39.1552 7.76721 39.1477 7.90452C39.1372 8.11645 39.0149 8.25675 38.8268 8.33286C38.6477 8.4045 38.4567 8.41047 38.2731 8.35227C38.0626 8.2866 37.9179 8.14332 37.8641 7.9269C37.8343 7.81049 37.8268 7.6896 37.8164 7.5687C37.6761 5.8165 37.2433 4.14042 36.5492 2.53001C36.4806 2.37181 36.409 2.21509 36.3313 2.06137C36.3015 2.00017 36.2493 1.95391 36.203 1.8957Z"
        fill="#380E63"
      />
    </svg>
  );
}

VioletLotus.propTypes = {
  style: PropTypes.object,
};

export default {
  aspectRatio: 48 / 32,
  svg: VioletLotus,
  title,
};