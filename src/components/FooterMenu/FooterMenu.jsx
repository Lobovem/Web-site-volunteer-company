import { Link, useLoaderData } from 'react-router-dom';
import s from './FooterMenu.module.scss';

export const FooterMenu = () => {
  const listMenu = useLoaderData();

  return (
    <nav className={s.menu}>
      <div className={s.menu__wrap}>
        <h2 className={s.menu__title}>про фонд</h2>
        <ul className={s.menu__list}>
          {listMenu &&
            listMenu.map((item) => {
              return (
                <li key={item.id} className={s.menu__item} data-testid="menu-item">
                  <Link className={s.menu__link} to={item.path}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </nav>
  );
};
