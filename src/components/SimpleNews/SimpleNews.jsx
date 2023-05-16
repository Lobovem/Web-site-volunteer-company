import { SliderFifth } from '../Sliders/SliderFifth/SliderFifth';
import { YoutubeVideo } from '../YoutubeVideo/YoutubeVideo';
import s from './SimpleNews.module.scss';

export const SimpleNews = () => {
  return (
    <>
      <div className={s.simpleNews}>
        <h3 className={s.simpleNews__decor}>Новини</h3>
        <div className={s.simpleNews__wrap}>
          <p className={s.simpleNews__text}>
            За допомогою онлайн -генератора тексту ви можете обробляти свій особистий Lorem Ipsum , збагачуючи його html -елементами, які визначають його
            структуру, з можливістю вставляти зовнішні посилання, але не тільки. Фактично, вставляючи будь -який фантастичний текст або відомий текст, це вірш,
            промова, літературний уривок, текст пісні тощо, наш текстовий генератор забезпечить випадкове виділення термінів і кроків для створення власного
            ексклюзивного Lorem Ipsum. Фактично...
          </p>
          <SliderFifth></SliderFifth>
        </div>
      </div>
      <YoutubeVideo></YoutubeVideo>
    </>
  );
};
