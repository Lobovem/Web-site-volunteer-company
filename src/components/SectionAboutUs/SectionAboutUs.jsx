import { TitleSection } from '../TitleSection/TitleSection';
import aboutUs from '../../img/aboutUs.jpg';
import { TitleMain } from '../Title/TitleMain';
import s from './SectionAboutUs.module.scss';

export const SectionAboutUs = () => {
  return (
    <div className={s.sectionAboutUs}>
      <div className={s.sectionAboutUs__wrap}>
        <TitleSection title="український гуманітарний батальйон"></TitleSection>
        <div className={s.sectionAboutUs__contentWrap}>
          <div className={s.sectionAboutUs__imgWrap}>
            <img className={s.sectionAboutUs__img} src={aboutUs} alt="aboutUs.jpg" />
          </div>
          <div className={s.sectionAboutUs__textWrap}>
            <TitleMain title="Ми благодійний фонд"></TitleMain>
            <p className={s.sectionAboutUs__desc}>
              За допомогою онлайн -генератора тексту ви можете обробляти свій особистий Lorem Ipsum , збагачуючи його html -елементами, які визначають його
              структуру, з можливістю вставляти зовнішні посилання, але не тільки. Фактично, вставляючи будь -який фантастичний текст або відомий текст, це
              вірш, промова. Фактично, вставляючи будь -який фантастичний текст.
            </p>
            <h3 className={s.sectionAboutUs__title}>Що означає Lorem ipsum dolor?</h3>
            <p className={s.sectionAboutUs__desc}>
              Коли йдеться про Lorem ipsum, використовуються різні вирази, а саме текст заповнення , вигаданий текст , сліпий текст або текст -заповнювач :
              коротше, його значення також може бути нульовим, але його корисність настільки ясна, що він проходить через століття і протистоїть іронічним та
              сучасним версіям, які з’явилися з появою Інтернету. Фактично, вставляючи будь -який фантастичний текст або відомий текст, це вірш, промова, Коли
              йдеться про Lorem ipsum, використовуються різні вирази, а саме текст заповнення , вигаданий текст , сліпий текст або текст -заповнювач : коротше,
              його значення також може бути нульовим, але його корисність настільки ясна, що він проходить через століття і протистоїть іронічним та сучасним.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
