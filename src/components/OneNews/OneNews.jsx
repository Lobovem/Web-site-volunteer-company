import { useLoaderData, useParams } from 'react-router-dom';
import { SliderFifth } from '../Sliders/SliderFifth/SliderFifth';
import { YoutubeVideo } from '../YoutubeVideo/YoutubeVideo';
import { oneNewsSelector } from '../../redux/slice/contentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import s from './OneNews.module.scss';
import { Loader } from '../Loader/Loader';

export const fetchOneNews = async (id) => {
  try {
    const response = await fetch(`https://base-twmn.onrender.com/news/${id}`);
    if (!response.status === 200) {
      throw new Error('Error fetching news list');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const OneNews = () => {
  const { id } = useParams();

  // useEffect(() => {
  // dispatch(fetchOneNews(id)); // Dispatch the action to fetch news data by ID
  // }, [id]);

  //selector for simple news data
  const oneNews = useLoaderData();

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
