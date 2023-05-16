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
// import { fetchListMenu } from '../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContent } from '../../redux/slice/contentSlice';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent());
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

  // useEffect(() => {
  //   if (data.burgerMenuState) {
  //     document.body.classList.add('active');
  //   } else {
  //     document.body.classList.remove('active');
  //   }
  // }, [data.burgerMenuState]);

  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<PageHome />} />
        {/* <Route path="/about-us" element={<PageAboutUs />} /> */}
        {/* <Route path="/news" element={<PageNews />}></Route> */}
        {/* <Route path="/news/:newsId" element={<PageSimpleNews />} /> */}
        {/* <Route path="/get-help" element={<PageGetHelp />} /> */}
        <Route path="*" element={<PageError />} />
      </Routes>
      <Footer />
    </div>
  );
};

// function App() {

//   return (
//     <div className="grid gap-4 grid-cols-2  md:grid-cols-4 lg:grid-cols-8  p-4">
//       {contents.map((content) => (
//         <div key={content.id}>
//           <img src={`${content.thumbnailUrl}`} alt={`${content.title}`} className="w-full h-full rounded" />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
