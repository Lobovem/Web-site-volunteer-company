import { useSelector } from 'react-redux';
import { menuListSelector } from '../../store/reducer';
import s from './FooterMenu.module.scss';

export const FooterMenu = () => {
  const menuList = useSelector(menuListSelector);

  return (
    <nav className={s.menu}>
      <div className={s.menu__wrap}>
        <h2 className={s.menu__title}>про фонд</h2>
        <ul className={s.menu__list}>
          {menuList.map((item) => {
            return (
              <li key={item.id} className={s.menu__item}>
                <a className={s.menu__link} href={item.link}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
