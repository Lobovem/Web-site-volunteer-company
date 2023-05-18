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
// import { fetchListMenu } from '../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenu, fetchNews } from '../../redux/slice/contentSlice';

export const App = ({ newsId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenu());
    dispatch(fetchNews());
  }, [dispatch]);

  const isLoading = useSelector((state) => state.content.isLoading);
  const error = useSelector((state) => state.content.error);

  if (isLoading) {
    return 'loading...';
  }

  if (error) {
    return error;
  }
  // const data = useSelector(dataSelector);

  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetchListMenu()
  //     .then(setData)
  //     .then(() => setLoading(false));
  // }, []); //[] скобки нужны, чтобы тело useEffect было запущено только один раз

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // useEffect(() => {
  //   localStorage.setItem('baseData', JSON.stringify(baseData));
  // }, [baseData]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/about-us" element={<PageAboutUs />} />
        <Route path="/news" element={<PageNews />}></Route>
        <Route path="/news/:newsId" element={<PageSimpleNews newsId={newsId} />} />
        <Route path="/get-help" element={<PageGetHelp />} />
        <Route path="*" element={<PageError />} />
      </Routes>
      <Footer />
    </div>
  );
};
