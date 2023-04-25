import s from './header.module.scss';
import layout from '../../styles/layout.module.scss';
import { Lang } from './Lang';
import { Menu } from '../menu/Menu';
import { LogoMain } from './LogoMain';
import { Burger } from '../menu/Burger';
import { useState } from 'react';

export const Header = () => {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(!state);
  };

  return (
    <header className={`${s.header} ${layout.layout}`}>
      <div className={s.header__wrap}>
        <LogoMain></LogoMain>
        <div className={s.header__menuWrap}>
          <Burger handleClick={handleClick} state={state}></Burger>
          <Menu state={state}></Menu>
          <Lang href="/"></Lang>
        </div>
      </div>
    </header>
  );
};
