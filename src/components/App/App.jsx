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
import { PageSimpleNews, PageSimpleNews1 } from '../PageSimpleNews/PageSimpleNews';
import { PageGetHelp } from '../PageGetHelp/PageGetHelp';
import { NewsList, Product } from '../NewsList/NewsList';

export const App = ({ news }) => {
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
        <Route path="/news" element={<PageNews />}></Route>
        <Route path="/news/:newsId" element={<PageSimpleNews news={news} />} />
        <Route path="/get-help" element={<PageGetHelp />} />
        <Route path="*" element={<PageError />} />
      </Routes>
      <Footer />
    </div>
  );
};
