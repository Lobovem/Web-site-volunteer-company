import s from './FooterMenu.module.scss';

export const FooterMenu = () => {
  const menuList = [
    { id: 1, title: 'Про нас', link: '/AboutUs' },
    { id: 2, title: 'Новини', link: '/news' },
    { id: 3, title: 'Отримати допомогу', link: '/get-help' },
    { id: 4, title: 'Допомогти', link: '/help' },
    { id: 5, title: 'Контакти', link: '/contacts' },
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
