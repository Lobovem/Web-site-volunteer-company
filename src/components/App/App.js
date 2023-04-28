import { useSelector } from 'react-redux';
import { burgerMenuSelector } from '../store/reducer';
import { Header } from '../Header/Header';
import { Banner } from '../Banner/Banner';
import { useEffect } from 'react';
import { SectionAboutUs } from '../SectionAboutUs/SectionAboutUs';
import { SectionNews } from '../SectionNews/SectionsNews';
import { OurResult } from '../OurResult/OurResult';

function App() {
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
      <Banner></Banner>
      <SectionAboutUs></SectionAboutUs>
      <SectionNews></SectionNews>
      <OurResult></OurResult>
    </div>
  );
}

export default App;
