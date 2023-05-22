import { useParams } from 'react-router-dom';
import { SliderFifth } from '../Sliders/SliderFifth/SliderFifth';
import { YoutubeVideo } from '../YoutubeVideo/YoutubeVideo';
import { fetchNewsSimple, newsSimpleSelector } from '../../redux/slice/contentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import s from './SimpleNews.module.scss';
// import { newsFetch } from '../../api/api';

export const SimpleNews = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewsSimple(id)); // Dispatch the action to fetch news data by ID
  }, [id]);

  const newsSimple = useSelector(newsSimpleSelector);

  console.log('newsSimple', newsSimple);

  return (
    <>
      <div className={s.simpleNews}>
        <div key={newsSimple.id}>
          <h1 className={s.simpleNews__title}>{newsSimple.title}</h1>
          <div className={s.simpleNews__wrap}>
            <h3 className={s.simpleNews__decor}>Новини</h3>
            <div>
              <p className={s.simpleNews__text}>{newsSimple.desc}</p>
            </div>
            <SliderFifth news={newsSimple}></SliderFifth>
          </div>
        </div>
      </div>
      <YoutubeVideo></YoutubeVideo>
    </>
  );
};
