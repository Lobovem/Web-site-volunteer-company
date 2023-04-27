import { Slider } from '../Slider/Slider';
import { TitleMain } from '../TitleMain/TitleMain';
import { TitleSection } from '../TitleSection/TitleSection';
import s from './SectionNews.module.scss';

export const SectionNews = (props) => {
  return (
    <div className={s.sectionNews}>
      <div className={s.sectionNews__wrap}>
        <h2 className={s.sectionNews__decor}>Новини</h2>
        <TitleSection title="Новини"></TitleSection>
        <div className={s.sectionNews__inner}>
          <div className={s.sectionNews__textWrap}>
            <TitleMain title="Нашою метою є вирішення нагальних проблем ЗСУ"></TitleMain>
            <p className={s.sectionNews__desc}>
              За допомогою онлайн -генератора тексту ви можете обробляти свій особистий Lorem Ipsum , збагачуючи його html -елементами, які визначають його
              структуру, з можливістю вставляти зовнішні посилання, але не тільки...
            </p>
            <a className={s.sectionNews__link} href="/">
              Читати повністю
            </a>
          </div>

          <div className={s.sectionNews__slider}>
            <Slider></Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
