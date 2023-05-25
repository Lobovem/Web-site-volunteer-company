import { PageHome } from '../PageHome/PageHome';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { PageAboutUs } from '../PageAboutUs/PageAboutUs';
import { PageNews } from '../PageNews/PageNews';
import { PageError } from '../PageError/PageError';
import { PageOneNews } from '../PageSimpleNews/PageOneNews';
import { PageGetHelp } from '../PageGetHelp/PageGetHelp';
import { useSelector } from 'react-redux';
import { ScrollToTop } from '../ScrollTop/ScrollTop';
import { PageUserCondition } from '../PageUserConditions/PageUserCondition';
import { PageContacts } from '../PageContacts/PageContacts';
import { PageDonate } from '../PageDonate/PageDonate';
import { Loader } from '../Loader/Loader';
import s from './app.module.scss';
import { Outlet, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import { fetchMenu } from '../Menu/Menu';
import { fetchNews } from '../Pagination/Pagination';
import { fetchOneNews } from '../OneNews/OneNews';

export const App = () => {
  // useEffect(() => {
  //   // dispatch(fetchMenu());
  //   // dispatch(fetchNews());
  // }, [dispatch]);

  const isLoading = useSelector((state) => state.content.isLoading);
  const error = useSelector((state) => state.content.error);

  if (isLoading) {
    return (
      <div className={s.loader}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <h1 className={s.error}>{error}</h1>;
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      loader: fetchMenu,
      children: [
        { path: '/', element: <PageHome /> },
        { path: '/about-us', element: <PageAboutUs /> },
        { path: '/about-us', element: <PageAboutUs /> },
        { path: '/news', element: <PageNews />, loader: fetchNews },
        { path: '/news/:id', element: <PageOneNews />, loader: fetchOneNews },
        { path: '/get-help', element: <PageGetHelp /> },
        { path: '/donate', element: <PageDonate /> },
        { path: '/contacts', element: <PageContacts /> },
        { path: '/user-condition', element: <PageUserCondition /> },
        { path: '*', element: <PageError /> },
      ],
    },
  ]);

  return (
    <div>
      {/* <ScrollToTop /> */}
      <RouterProvider router={router} />
    </div>
  );
};

export const Root = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
