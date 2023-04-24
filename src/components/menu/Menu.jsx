import s from './menu.module.scss';

export const Menu = (props) => {
  const item = [
    { id: 1, title: 'Про нас', link: '/about' },
    { id: 2, title: 'Новини', link: '/news' },
    { id: 3, title: 'Отримати допомогу', link: '/get-help' },
    { id: 4, title: 'Допомогти', link: '/help' },
    { id: 5, title: 'Контакти', link: '/contacts' },
  ];

  return (
    <nav className={s.menu}>
      <ul className={s.menu__list}>
        {item.map((item) => {
          return (
            <li key={item.id} className={s.menu__item}>
              <a className={s.menu__link} href={item.link}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
