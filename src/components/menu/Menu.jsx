import { useDispatch, useSelector } from 'react-redux';
import { burgerMenuSelector, isOpenBurgerMenu, menuListSelector } from '../../store/reducer';
import s from './Menu.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Menu = () => {
  const burgerMenu = useSelector(burgerMenuSelector);
  const dispatch = useDispatch();
  const menuList = useSelector(menuListSelector);

  return (
    <nav className={!burgerMenu ? s.menu : `${s.menu} ${s.active}`}>
      <ul className={s.menu__list} onClick={() => dispatch(isOpenBurgerMenu())}>
        {menuList.map((item) => {
          if (item.title !== 'Звіти')
            return (
              <li key={item.id} className={s.menu__item}>
                <Link to={item.link} className={s.menu__link}>
                  {item.title}
                </Link>
              </li>
            );
          return null;
        })}
      </ul>
    </nav>
  );
};
