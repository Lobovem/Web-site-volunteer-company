import s from './FooterContacts.module.scss';

import phone from '../../img/icon-phone.svg';
import adress from '../../img/icon-adress.svg';

export const FooterContacts = () => {
  return (
    <div className={s.contacts}>
      <div className={s.contacts__wrap}>
        <h2 className={s.contacts__title}>контакти</h2>
        <div className={s.contacts__phoneBox}>
          <img className={s.contacts__img} src={phone} alt="icon-phone.svg" />
          <a className={s.contacts__desc} href="tel:+380630494002">
            +380 (63)-049-40-02
          </a>
          <a className={s.contacts__desc} href="tel:+380671597373">
            +380 (67)-159-73-73
          </a>
        </div>

        <div className={s.contacts__adressBox}>
          <img className={s.contacts__img} src={adress} alt="icon-adress.svg" />
          <adress className={s.contacts__desc}>м. Харків, вул.Космічна, буд. 21, оф. 529</adress>
        </div>
      </div>
    </div>
  );
};
