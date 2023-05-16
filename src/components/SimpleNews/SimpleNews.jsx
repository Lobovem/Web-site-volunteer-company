import { useParams } from 'react-router-dom';
import { SliderFifth } from '../Sliders/SliderFifth/SliderFifth';
import { YoutubeVideo } from '../YoutubeVideo/YoutubeVideo';
import data from '../../data/data.json';
import s from './SimpleNews.module.scss';

export const SimpleNews = () => {
  const { newsId } = useParams();
  console.log('newsId=====>', newsId);

  const news = data.filter((item) => item.id === newsId);
  return (
    <>
      <div className={s.simpleNews}>
        {news.map((item) => (
          <div>
            <h1>{item.title}</h1>
            <div className={s.simpleNews__wrap}>
              <h3 className={s.simpleNews__decor}>Новини</h3>
              {/* <div className={s.simpleNews__wrap}> */}
              <div>
                <p className={s.simpleNews__text}>{item.desc}</p>
                {/* </div> */}
              </div>
              <SliderFifth></SliderFifth>
            </div>
          </div>
        ))}
      </div>
      <YoutubeVideo></YoutubeVideo>
    </>
  );
};
