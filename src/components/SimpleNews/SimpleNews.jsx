import { useParams } from 'react-router-dom';
import { SliderFifth } from '../Sliders/SliderFifth/SliderFifth';
import { YoutubeVideo } from '../YoutubeVideo/YoutubeVideo';
import { fetchNews, listNewsSelector } from '../../redux/slice/contentSlice';
import { useSelector } from 'react-redux';
import s from './SimpleNews.module.scss';
import { useEffect, useState } from 'react';
// import { newsFetch } from '../../api/api';

export const SimpleNews = () => {
  const [news, setNews] = useState([]);
  const { id } = useParams();

  const newsFetch = () => {
    fetch(`http://localhost:3000/news/${id}`)
      .then((res) => res.json())
      .then((data) => setNews(data));
  };

  useEffect(() => {
    newsFetch();
  }, []);
  // const listNews = useSelector(listNewsSelector);
  // const news = listNews.filter((item) => item.id === newsId);

  console.log('id', id);
  console.log('news', news);

  return (
    <>
      <div className={s.simpleNews}>
        <div key={news.id}>
          <h1 className={s.simpleNews__title}>{news.title}</h1>
          <div className={s.simpleNews__wrap}>
            <h3 className={s.simpleNews__decor}>Новини</h3>
            <div>
              <p className={s.simpleNews__text}>{news.desc}</p>
            </div>
            <SliderFifth news={news}></SliderFifth>
          </div>
        </div>
      </div>
      <YoutubeVideo></YoutubeVideo>
    </>
  );
};
