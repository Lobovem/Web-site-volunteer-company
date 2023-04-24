import s from './logoMain.module.scss';
import logo from '../../img/logo-main.svg';
export const LogoMain = () => {
  return (
    <a className={s.logoMain} href="./">
      <img className={s.logoMain__img} src={logo} alt="ukraine-flag.png" />
    </a>
  );
};
