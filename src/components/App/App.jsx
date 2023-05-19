import { useEffect } from 'react';
import { PageHome } from '../PageHome/PageHome';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //importing routing elements
import { PageAboutUs } from '../PageAboutUs/PageAboutUs';
import { PageNews } from '../PageNews/PageNews';
import { PageError } from '../PageError/PageError';
import { PageSimpleNews } from '../PageSimpleNews/PageSimpleNews';
import { PageGetHelp } from '../PageGetHelp/PageGetHelp';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenu, fetchNews } from '../../redux/slice/contentSlice';
import { ScrollToTop } from '../ScrollTop/ScrollTop';
import { PageUserCondition } from '../PageUserConditions/PageUserCondition';

export const App = ({ newsId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenu());
    dispatch(fetchNews());
  }, []);

  const isLoading = useSelector((state) => state.content.isLoading);
  const error = useSelector((state) => state.content.error);

  if (isLoading) {
    return 'loading...';
  }

  if (error) {
    return error;
  }

  return (
    <div>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/about-us" element={<PageAboutUs />} />
        <Route path="/news" element={<PageNews />} />
        <Route path="/news/:newsId" element={<PageSimpleNews />} />
        <Route path="/get-help" element={<PageGetHelp />} />
        <Route path="/user-condition" element={<PageUserCondition />} />
        <Route path="*" element={<PageError />} />
      </Routes>
      <Footer />
    </div>
  );
};
