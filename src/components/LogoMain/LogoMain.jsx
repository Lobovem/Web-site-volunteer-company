import React from 'react';
import { Link } from 'react-router-dom';
import s from './LogoMain.module.scss';
import foto from './logo-main.svg';

export const LogoMain = () => {
  return (
    <Link to="/" className={s.logoMain}>
      <img src={foto} alt="ukraine-flag.png" />
    </Link>
  );
};
