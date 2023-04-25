import layout from '../../styles/layout.module.scss';
import { LangSite } from '../LangSite/LangSite';
import { Menu } from '../Menu/Menu';
import { LogoMain } from '../LogoMain/LogoMain';
import { Burger } from '../kit/Burger/Burger';
import s from './header.module.scss';

export const Header = () => {
  return (
    <header className={`${s.header} ${layout.layout}`}>
      <div className={s.header__wrap}>
        <LogoMain></LogoMain>
        <div className={s.header__menuWrap}>
          <Burger></Burger>
          <Menu></Menu>
          <LangSite href="/"></LangSite>
        </div>
      </div>
    </header>
  );
};
