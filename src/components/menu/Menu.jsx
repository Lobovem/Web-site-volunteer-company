import { useDispatch, useSelector } from 'react-redux';
import { burgerMenuSelector, isOpenBurgerMenu } from '../../store/reducer';
import s from './Menu.module.scss';
import { Link } from 'react-router-dom';

export const Menu = () => {
  const burgerMenu = useSelector(burgerMenuSelector);
  const dispatch = useDispatch();

  const menuList = [
    { id: 1, title: 'Про нас', link: '/aboutUs' },
    { id: 2, title: 'Новини', link: '/news' },
    { id: 3, title: 'Отримати допомогу', link: '/get-help' },
    { id: 4, title: 'Допомогти', link: '/help' },
    { id: 5, title: 'Контакти', link: '/contacts' },
  ];

  return (
    <nav className={!burgerMenu ? s.menu : `${s.menu} ${s.active}`}>
      <ul className={s.menu__list} onClick={() => dispatch(isOpenBurgerMenu())}>
        {menuList.map((item) => {
          return (
            <li key={item.id} className={s.menu__item}>
              <Link to={item.link} className={s.menu__link}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
