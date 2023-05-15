import { TitleMain } from '../TitleMain/TitleMain';
// import data from '../../data/data.json';
import s from './NewsAll.module.scss';

export const NewsAll = ({ currentItems }) => {
  return (
    <div className={s.news}>
      <h3 className={s.news__decor}>Новини</h3>
      <div className={s.news__wrap}>
        {currentItems &&
          currentItems.map((item) => (
            <div className={s.news__inner}>
              <div className={s.news__imgWrap}>
                <img className={s.news__img} src={item.photo} alt="news.jpg" />
              </div>

              <div className={s.news__textBox}>
                <div className={s.news__textWrap}>
                  <TitleMain title={item.title}></TitleMain>
                  <p className={s.news__desc}>{item.desc}</p>
                </div>

                <a className={s.news__link} href="/">
                  Читати повністю
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
