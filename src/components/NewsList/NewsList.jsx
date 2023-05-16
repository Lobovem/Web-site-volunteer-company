import { Link, Route, Routes, useParams } from 'react-router-dom';
import { TitleMain } from '../TitleMain/TitleMain';
import s from './NewsList.module.scss';
import data from '../../data/data.json';

export const NewsList = ({ currentItems }) => {
  return (
    <div className={s.news}>
      <ProductList />
      <h3 className={s.news__decor}>Новини</h3>

      <div className={s.news__wrap}>
        {currentItems &&
          currentItems.map((item) => (
            <div className={s.news__inner}>
              <div className={s.news__imgWrap}>
                <Link key={data.id} to={data.title}>
                  <img className={s.news__img} src={item.photo} alt="news.jpg" />
                </Link>
              </div>

              <div className={s.news__textBox}>
                <div className={s.news__textWrap}>
                  <Link className={s.news__linkAlt} to={data.title}>
                    <TitleMain title={item.title}></TitleMain>
                  </Link>

                  <p className={s.news__desc}>{item.desc}</p>
                </div>

                <Link to={data.title} className={s.news__link}>
                  Читати повністю
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

// function Products() {
//   return (
//     <div>
//       <h2>Продукты</h2>
//       <Routes>
//         <Route path="/" element={<ProductList />} />
//         <Route path=":productId" element={<Product />} />
//       </Routes>
//     </div>
//   );
// }

export const ProductList = () => {
  return (
    <div>
      <h3>Выберите продукт</h3>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <Link to={product.id}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// function Product() {
//   const { productId } = useParams();

//   return <h3>Вы выбрали продукт: {productId}</h3>;
// }
