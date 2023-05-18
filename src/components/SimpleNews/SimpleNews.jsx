import { useParams } from 'react-router-dom';
import { SliderFifth } from '../Sliders/SliderFifth/SliderFifth';
import { YoutubeVideo } from '../YoutubeVideo/YoutubeVideo';
import s from './SimpleNews.module.scss';
import { listNewsSelector } from '../../redux/slice/contentSlice';
import { useSelector } from 'react-redux';

export const SimpleNews = () => {
  const { newsId } = useParams();
  const listNews = useSelector(listNewsSelector);

  const news = listNews.filter((item) => item.id === newsId);

  console.log('newsId=====>', newsId);
  // console.log('news=====>', news);

  return (
    <>
      <div className={s.simpleNews}>
        {news.map((item) => (
          <div key={item.id}>
            <div className={s.simpleNews__wrap}>
              <h3 className={s.simpleNews__decor}>Новини</h3>
              <div>
                <p className={s.simpleNews__text}>{item.desc}</p>
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
