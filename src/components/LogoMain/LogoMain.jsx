import React from 'react';
import logo from '../../img/logo-main.svg';
import s from './LogoMain.module.scss';

export const LogoMain = () => {
  return (
    <a className={s.logoMain} href="./">
      <img className={s.logoMain__img} src={logo} alt="ukraine-flag.png" />
    </a>
  );
};
