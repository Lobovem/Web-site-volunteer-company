import { useSelector } from 'react-redux';
import { burgerMenuSelector } from '../../store/reducer';
import { useEffect } from 'react';
import { PageHome } from '../PageHome/PageHome';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //importing routing elements
import { PageAboutUs } from '../PageAboutUs/PageAboutUs';
import { PageNews } from '../PageNews/PageNews';
import { PageError } from '../PageError/PageError';

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
      <Header></Header>
      <Routes>
        <Route path="/" element={<PageHome></PageHome>} />
        <Route path="/aboutUs" element={<PageAboutUs></PageAboutUs>} />
        <Route path="/news" element={<PageNews></PageNews>} />
        <Route path="*" element={<PageError />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
};
