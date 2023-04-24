import s from './header.module.scss';
import layout from '../../styles/layout.module.scss';
import { Lang } from './Lang';
import { Menu } from '../menu/Menu';
import { LogoMain } from './LogoMain';
import { Burger } from '../menu/Burger';

export const Header = () => {
  return (
    <header className={`${s.header} ${layout.layout}`}>
      <div className={s.header__wrap}>
        <LogoMain></LogoMain>
        <div className={s.header__menuWrap}>
          <Burger></Burger>
          <Menu></Menu>
          <Lang href="/"></Lang>
        </div>
      </div>
    </header>
  );
};
