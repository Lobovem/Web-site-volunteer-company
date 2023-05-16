import { useSelector } from 'react-redux';
import s from './FooterMenu.module.scss';

export const FooterMenu = () => {
  // const listMenu = useSelector(listMenuSelector);

  const listMenu = useSelector((state) => state.content.contents);

  return (
    <nav className={s.menu}>
      <div className={s.menu__wrap}>
        <h2 className={s.menu__title}>про фонд</h2>
        <ul className={s.menu__list}>
          {listMenu.map((item) => {
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
