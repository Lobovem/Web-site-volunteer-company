import { useParams } from 'react-router-dom';
import { SliderFifth } from '../Sliders/SliderFifth/SliderFifth';
import { YoutubeVideo } from '../YoutubeVideo/YoutubeVideo';
import { fetchNews, listNewsSelector } from '../../redux/slice/contentSlice';
import { useSelector } from 'react-redux';
import s from './SimpleNews.module.scss';
import { useEffect, useState } from 'react';
// import { newsFetch } from '../../api/api';

const SERVER_URL = 'http://localhost:3000/news/?newsId';

export const newsFetch = async (url) => {
  try {
    const news = await fetch(SERVER_URL + url);
    return await news.json();
  } catch (error) {
    console.log('Fetch error: ', error);
  }
};

export const SimpleNews = () => {
  const [news, setNews] = useState([]);
  const { newsId } = useParams();

  useEffect(() => {
    newsFetch(newsId).then(setNews);
  }, [newsId]);
  // const listNews = useSelector(listNewsSelector);
  // const news = listNews.filter((item) => item.id === newsId);

  console.log('newsId', newsId);
  console.log('news', news);

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
