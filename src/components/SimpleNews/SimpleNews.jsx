import { useParams } from 'react-router-dom';
import { SliderFifth } from '../Sliders/SliderFifth/SliderFifth';
import { YoutubeVideo } from '../YoutubeVideo/YoutubeVideo';
import { fetchOneNews, oneNewsSelector } from '../../redux/slice/contentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import s from './SimpleNews.module.scss';

export const SimpleNews = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneNews(id)); // Dispatch the action to fetch news data by ID
  }, [id]);

  const isLoading = useSelector((state) => state.content.isLoading);
  const error = useSelector((state) => state.content.error);
  const oneNews = useSelector(oneNewsSelector);

  if (isLoading) {
    return 'loading...';
  }

  if (error) {
    return error;
  }

  //selector for simple news data

  return (
    <>
      <div className={s.simpleNews}>
        <div key={oneNews.id}>
          <h1 className={s.simpleNews__title}>{oneNews.title}</h1>
          <div className={s.simpleNews__wrap}>
            <h3 className={s.simpleNews__decor}>Новини</h3>
            <div>
              <p className={s.simpleNews__text}>{oneNews.desc}</p>
            </div>
            <SliderFifth news={oneNews}></SliderFifth>
          </div>
        </div>
      </div>
      <YoutubeVideo></YoutubeVideo>
    </>
  );
};
