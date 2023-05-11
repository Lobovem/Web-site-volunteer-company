import s from './FooterMenu.module.scss';

export const FooterMenu = () => {
  const menuList = [
    { id: 1, title: 'Про нас', link: '/about' },
    { id: 2, title: 'Контакти', link: '/contacts' },
    { id: 3, title: 'Допомогти', link: '/donate' },
    { id: 4, title: 'Новини', link: '/news' },
    { id: 5, title: 'Отримати допомогу', link: '/get-help' },
    { id: 6, title: 'Звіти', link: '/result' },
  ];

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
