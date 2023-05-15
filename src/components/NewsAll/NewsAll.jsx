import s from './NewsAll.module.scss';

export const NewsAll = () => {
  return (
    <div className={s.sectionNews}>
      <h3 className={s.sectionNews__decor}>Новини</h3>
      <div className={s.sectionNews__inner}>
        <div className={s.sectionNews__textWrap}>
          <p className={s.sectionNews__desc}>
            За допомогою онлайн -генератора тексту ви можете обробляти свій особистий Lorem Ipsum , збагачуючи його html -елементами, які визначають його
            структуру, з можливістю вставляти зовнішні посилання, але не тільки...
          </p>
          <a className={s.sectionNews__link} href="/">
            Читати повністю
          </a>
        </div>
      </div>
    </div>
  );
};
