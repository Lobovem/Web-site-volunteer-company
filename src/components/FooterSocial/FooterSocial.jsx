import s from './FooterSocial.module.scss';

import instagram from '../../img/icon-instagram.svg';
import facebook from '../../img/icon-facebook.svg';

export const FooterSocial = () => {
  return (
    <div className={s.social}>
      <div className={s.social__wrap}>
        <h2 className={s.social__title}>соціальні мережі</h2>
        <div className={s.social__instagramBox}>
          <img className={s.social__img} src={instagram} alt="icon-instagram.svg" />
          <a className={s.social__desc} href="/">
            instagram
          </a>
        </div>

        <div className={s.social__facebookBox}>
          <img className={s.social__img} src={facebook} alt="icon-facebook.svg" />
          <a className={s.social__desc} href="/">
            facebook
          </a>
        </div>
      </div>
    </div>
  );
};
