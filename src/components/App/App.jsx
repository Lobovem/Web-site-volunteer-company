import { useSelector } from 'react-redux';
import { burgerMenuSelector } from '../../store/reducer';
import { useEffect } from 'react';
import { PageHome } from '../PageHome/PageHome';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; //importing routing elements
import { PageAboutUs } from '../PageAboutUs/PageAboutUs';
import { PageNews } from '../PageNews/PageNews';
import { PageError } from '../PageError/PageError';
import { PageSimpleNews } from '../PageSimpleNews1/PageSimpleNews1';
import { PageGetHelp } from '../PageGetHelp/PageGetHelp';

export const App = () => {
  const burgerMenu = useSelector(burgerMenuSelector);

  useEffect(() => {
    if (burgerMenu) {
      document.body.classList.add('active');
    } else {
      document.body.classList.remove('active');
    }
  }, [burgerMenu]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/aboutUs" element={<PageAboutUs />} />
        <Route path="/news/*" element={<PageNews />}></Route>
        {/* <Route path="/news/simple-news" element={<PageSimpleNews />} /> */}
        <Route path="/get-help" element={<PageGetHelp />} />
        <Route path="*" element={<PageError />} />
      </Routes>
      <Footer />
    </div>
  );
};

// function Products() {
//   return (
//     <div>
//       <h2>Продукты</h2>
//       <Routes>
//         <Route path="/" element={<ProductList />} />
//         <Route path="/:productId" element={<Product />} />
//       </Routes>
//     </div>
//   );
// }

// function ProductList() {
//   return (
//     <div>
//       <h3>Выберите продукт</h3>
//       <ul>
//         <li>
//           <Link to="product1">Продукт 1</Link>
//         </li>
//         <li>
//           <Link to="product2">Продукт 2</Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// function Product({ match }) {
//   const { productId } = match.params;

//   return <h3>Вы выбрали продукт: {productId}</h3>;
// }
