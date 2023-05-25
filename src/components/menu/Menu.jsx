import { useDispatch, useSelector } from 'react-redux';
import s from './Menu.module.scss';
import './style.scss';
import { NavLink, useLoaderData } from 'react-router-dom';
import { burgerMenuSelector, changeBurgerState } from '../../redux/slice/contentSlice';

export const fetchMenu = async () => {
  try {
    const response = await fetch('https://base-twmn.onrender.com/listMenu');
    if (!response.status === 200) {
      throw new Error('Error fetching news list');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const Menu = () => {
  const dispatch = useDispatch();
  const burgerMenu = useSelector(burgerMenuSelector);
  // const listMenu = useSelector(listMenuSelector);

  const listMenu = useLoaderData();

  return (
    <nav className={!burgerMenu ? s.menu : `${s.menu} ${s.active}`}>
      <ul className={s.menu__list} onClick={() => dispatch(changeBurgerState(!burgerMenu))}>
        {listMenu &&
          listMenu.map((item) => {
            if (item.show)
              return (
                <li key={item.id} className={s.menu__item}>
                  <NavLink to={item.path} className={s.menu__link} activeclassname="active">
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
