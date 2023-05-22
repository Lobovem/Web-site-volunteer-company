import { useParams } from 'react-router-dom';
import { SliderFifth } from '../Sliders/SliderFifth/SliderFifth';
import { YoutubeVideo } from '../YoutubeVideo/YoutubeVideo';
import { listNewsSelector } from '../../redux/slice/contentSlice';
import { useSelector } from 'react-redux';
import s from './SimpleNews.module.scss';

export const SimpleNews = () => {
  const { newsId } = useParams();
  const listNews = useSelector(listNewsSelector);
  const news = listNews.filter((item) => item.id === newsId);

  return (
    <>
      <div className={s.simpleNews}>
        {news.map((item) => (
          <div key={item.id}>
            <h1 className={s.simpleNews__title}>{item.title}</h1>
            <div className={s.simpleNews__wrap}>
              <h3 className={s.simpleNews__decor}>Новини</h3>
              <div>
                <p className={s.simpleNews__text}>{item.desc}</p>
              </div>
              <SliderFifth news={news}></SliderFifth>
            </div>
          </div>
        ))}
      </div>
      <YoutubeVideo></YoutubeVideo>
    </>
  );
};
