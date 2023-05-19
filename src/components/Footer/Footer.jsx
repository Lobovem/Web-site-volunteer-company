import { FooterMenu } from '../FooterMenu/FooterMenu';
import s from './Footer.module.scss';

import logo from '../../img/logo-second.png';
import { FooterContacts } from '../FooterContacts/FooterContacts';
import { FooterSocial } from '../FooterSocial/FooterSocial';
import { Btn } from '../kit/Btn/Btn';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className={s.footer}>
      <img className={s.footer__img} src={logo} alt="logo-second.png" />
      <div className={s.footer__wrap}>
        <div className={s.footer__inner}>
          <FooterMenu />
          <FooterContacts />
          <FooterSocial />

          <div className={s.footer__descBox}>
            <p className={s.footer__desc}>
              Україна – це вічність, не тільки сьогоднішня, але передусім майбутня й минула. Самостійну державу може здобути собі
              український народ тільки власною боротьбою і трудом. Не дивіться на Україну, як на землю своїх батьків. Дивіться на неї, як на
              землю своїх дітей
            </p>
            <div className={s.footer__btnBox}>
              <Link to="/donate">
                <Btn title="задонатити" type="button" className="btn-secondary" />
              </Link>
            </div>
          </div>
        </div>

        <div className={s.footer__copyright}>©‌ Міжнародний благодійний фонд “Український гуманітарний батальйон”, 2022-2023</div>
      </div>
    </div>
  );
};
