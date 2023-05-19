import { useDispatch, useSelector } from 'react-redux';
import s from './Menu.module.scss';
import './style.scss';
import { Link, NavLink } from 'react-router-dom';
import { listMenuSelector, burgerMenuSelector, changeBurgerState } from '../../redux/slice/contentSlice';

export const Menu = () => {
  const dispatch = useDispatch();
  const burgerMenu = useSelector(burgerMenuSelector);
  const listMenu = useSelector(listMenuSelector);

  return (
    <nav className={!burgerMenu ? s.menu : `${s.menu} ${s.active}`}>
      <ul className={s.menu__list} onClick={() => dispatch(changeBurgerState(!burgerMenu))}>
        {listMenu.map((item) => {
          if (item.show)
            return (
              <li key={item.id} className={s.menu__item}>
                <NavLink to={item.path} className={s.menu__link} activeClassName="active">
                  {item.title}
                </NavLink>
              </li>
            );
          return null;
        })}
      </ul>
    </nav>
  );
};
