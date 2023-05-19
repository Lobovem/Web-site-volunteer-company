import s from './FooterSocial.module.scss';

import instagram from '../../img/icon-instagram.svg';
import facebook from '../../img/icon-facebook.svg';

export const FooterSocial = () => {
  return (
    <div className={s.social}>
      <div className={s.social__wrap}>
        <h2 className={s.social__title}>соціальні мережі</h2>
        <a className={s.social__wrapLink} href="/">
          <img className={s.social__img} src={instagram} alt="icon-instagram.svg" />
          <p className={s.social__desc}>instagram</p>
        </a>

        <a className={s.social__wrapLink} href="/">
          <img className={s.social__img} src={facebook} alt="icon-facebook.svg" />
          <p className={s.social__desc}>facebook</p>
        </a>
      </div>
    </div>
  );
};
