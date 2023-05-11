import { TitleSection } from '../TitleSection/TitleSection';
import aboutUs from '../../img/aboutUs.jpg';
import { TitleMain } from '../TitleMain/TitleMain';
import s from './AboutUs.module.scss';

export const AboutUs = ({ children }) => {
  return (
    <div className={s.aboutUs}>
      <div className={s.aboutUs__wrap}>
        {/* <TitleSection title="український гуманітарний батальйон"></TitleSection> */}
        {children}
        <div className={s.aboutUs__contentWrap}>
          <div className={s.aboutUs__imgWrap}>
            <img className={s.aboutUs__img} src={aboutUs} alt="aboutUs.jpg" />
          </div>
          <div className={s.aboutUs__textWrap}>
            <TitleMain title="Міжнародний благодійний фонд “Український гуманітарний батальйон”"></TitleMain>
            <p className={s.aboutUs__desc}>
              За допомогою онлайн -генератора тексту ви можете обробляти свій особистий Lorem Ipsum , збагачуючи його html -елементами, які визначають його
              структуру, з можливістю вставляти зовнішні посилання, але не тільки. Фактично, вставляючи будь -який фантастичний текст або відомий текст, це
              вірш, промова. Фактично, вставляючи будь -який фантастичний текст.
            </p>
            <h3 className={s.aboutUs__title}>Що означає Lorem ipsum dolor?</h3>
            <p className={s.aboutUs__desc}>
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
