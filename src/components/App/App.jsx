import { useSelector } from 'react-redux';
import { burgerMenuSelector } from '../store/reducer';
import { useEffect } from 'react';
import { PageHome } from '../PageHome/PageHome';

import { Header } from '../Header/Header';
import { Banner } from '../Banner/Banner';
import { AboutUs } from '../AboutUs/AboutUs';
import { News } from '../News/News';
import { OurResult } from '../OurResult/OurResult';
import { WaySupport } from '../WaySupport/WaySupport';
import { Donate } from '../Donate/Donate';
import { Teams } from '../Teams/Teams';
import { Contacts } from '../Contacts/Contacts';
import { Form } from '../Form/Form';
import { Footer } from '../Footer/Footer';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';

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
      <PageHome>
        <Header></Header>
        <Banner></Banner>
        <AboutUs></AboutUs>
        <News></News>
        <OurResult></OurResult>
        <WaySupport></WaySupport>
        <Donate></Donate>
        <Teams></Teams>
        <Contacts></Contacts>
        <Form></Form>
        <Footer></Footer>
      </PageHome>
    </div>
  );
}

export default App;
