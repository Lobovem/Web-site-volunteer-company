import { Link, Outlet, Route, Routes, useParams } from 'react-router-dom';
import { TitleMain } from '../TitleMain/TitleMain';
import s from './NewsList.module.scss';
import { PageSimpleNews1 } from '../PageSimpleNews/PageSimpleNews';
import data from '../../data/data.json';

export const NewsList = ({ currentItems }) => {
  return (
    <div className={s.news}>
      {/* <h3>Вы выбрали продукт: {newsId}</h3> */}
      <h3 className={s.news__decor}>Новини</h3>

      <div className={s.news__wrap}>
        {currentItems &&
          currentItems.map((item) => (
            <div className={s.news__inner} key={item.id}>
              <div className={s.news__imgWrap}>
                <Link key={item.id} to={`/news/${item.id}`}>
                  <img className={s.news__img} src={item.photo} alt="news.jpg" />
                </Link>
              </div>

              <div className={s.news__textBox}>
                <div className={s.news__textWrap}>
                  <Link className={s.news__linkAlt} to={`/news/${item.id}`}>
                    <TitleMain title={item.title}></TitleMain>
                  </Link>

                  <p className={s.news__desc}>{item.desc}</p>
                </div>

                <Link to={`/news/${item.id}`} className={s.news__link}>
                  Читати повністю
                </Link>
              </div>
            </div>
          ))}
      </div>

      {/* <Outlet /> */}
    </div>
  );
};
