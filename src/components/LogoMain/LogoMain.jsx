import React from 'react';
import logo from '../../img/logo-main.svg';
import { Link } from 'react-router-dom';
import s from './LogoMain.module.scss';

export const LogoMain = () => {
  return (
    <Link to="/" className={s.logoMain}>
      <img src={logo} alt="ukraine-flag.png" />
    </Link>
  );
};
