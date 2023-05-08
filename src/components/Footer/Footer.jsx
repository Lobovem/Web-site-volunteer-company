import { FooterMenu } from '../FootetMenu/FootetMenu';
import s from './Footer.module.scss';

import logo from '../../img/logo-second.png';
import { FooterContacts } from '../FooterContacts/FooterContacts';
import { FooterSocial } from '../FooterSocial/FooterSocial';
import { Btn } from '../kit/Btn/Btn';

export const Footer = () => {
  return (
    <div className={s.footer}>
      <img className={s.footer__img} src={logo} alt="logo-second.png" />
      <div className={s.footer__wrap}>
        <div className={s.footer__inner}>
          <FooterMenu></FooterMenu>
          <FooterContacts></FooterContacts>
          <FooterSocial></FooterSocial>

          <div className={s.footer__descBox}>
            <p className={s.footer__desc}>
              За допомогою онлайн -генератора тексту ви можете обробляти свій особистий Lorem Ipsum , збагачуючи його html -елементами, які визначають його
              структуру, з можливістю вставляти зовнішні посилання, але не тільки.
            </p>
            <div className={s.footer__btnBox}>
              <Btn title="задонатити" type="button" className="btn-secondary"></Btn>
            </div>
          </div>
        </div>

        <div className={s.footer__copyright}>©‌ Міжнародний благодійний фонд “Український гуманітарний батальйон”, 2022-2023</div>
      </div>
    </div>
  );
};
