import { useDispatch, useSelector } from 'react-redux';
import { burgerMenuSelector } from '../../store/reducer';
import { useEffect, useState } from 'react';
import { PageHome } from '../PageHome/PageHome';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //importing routing elements
import { PageAboutUs } from '../PageAboutUs/PageAboutUs';
import { PageNews } from '../PageNews/PageNews';
import { PageError } from '../PageError/PageError';
import { PageSimpleNews } from '../PageSimpleNews/PageSimpleNews';
import { PageGetHelp } from '../PageGetHelp/PageGetHelp';
import data from '../../data/data.json';

export const App = () => {
  const [baseData, setbaseData] = useState(data);
  console.log('baseData', baseData);

  const burgerMenu = useSelector(burgerMenuSelector);

  useEffect(() => {
    localStorage.setItem('baseData', JSON.stringify(baseData));
  }, [baseData]);

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
        <Route path="/about-us" element={<PageAboutUs />} />
        <Route path="/news" element={<PageNews />}></Route>
        <Route path="/news/:newsId" element={<PageSimpleNews />} />
        <Route path="/get-help" element={<PageGetHelp />} />
        <Route path="*" element={<PageError />} />
      </Routes>
      <Footer />
    </div>
  );
};
