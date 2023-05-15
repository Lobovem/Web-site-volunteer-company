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
// import { Breadcrumbs } from '../Breadcrumbs/Breadcrumb';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; //importing routing elements
// import { ErrorPage } from './components/ErrorPage';
import { PageAboutUs } from '../PageAboutUs/PageAboutUs';
import { TitleSection } from '../TitleSection/TitleSection';
import { Breadcrumbs, CustomPropsBreadcrumb } from '../Breadcrumbs/Breadcrumbs';
import { PageNews } from '../PageNews/PageNews';
import { ErrorPage } from '../PageError/ErrorPage';
import { AboutUsWithHOC, DonateWithHOC, NewsWithHOC, OurRulesWithHOC, TeamsWithHOC, WayWithHOC } from '../SectionHOC/SectionHOC';

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
      <Routes>
        <Route
          path="/"
          element={
            <PageHome>
              <Header></Header>
              <Banner></Banner>
              <AboutUsWithHOC
                clasNameSectionWrap="sectionWrap"
                titleSection="український гуманітарний батальйон"
                classNameTitleSection="titleSection"
                classNameSection="section"
              ></AboutUsWithHOC>
              <NewsWithHOC
                clasNameSectionWrap="sectionWrap"
                titleSection="новини"
                classNameTitleSection="titleSection"
                classNameSection="sectionAlt"
              ></NewsWithHOC>
              <OurRulesWithHOC
                clasNameSectionWrap="sectionWrap"
                titleSection="наші результати"
                classNameTitleSection="titleSection"
                classNameSection="section"
              ></OurRulesWithHOC>
              <WayWithHOC
                clasNameSectionWrap="sectionWrap"
                titleSection="напрямки підтримки"
                classNameTitleSection="titleSection"
                classNameSection="sectionAlt"
              ></WayWithHOC>
              <DonateWithHOC clasNameSectionWrap="sectionWrap" classNameTitleSection="visuallyHidden" classNameSection="section"></DonateWithHOC>
              <TeamsWithHOC
                clasNameSectionWrap="sectionWrapAlt"
                titleSection="команда"
                classNameTitleSection="titleSection"
                classNameSection="sectionShort"
              ></TeamsWithHOC>
              <Contacts></Contacts>
              <Form></Form>
              <Footer></Footer>
            </PageHome>
          }
        />
        <Route
          path="/aboutUs"
          element={
            <PageAboutUs>
              <Header></Header>
              <Breadcrumbs></Breadcrumbs>
              <AboutUsWithHOC titleSection="про нас" classNameSection="section"></AboutUsWithHOC>
              <Teams></Teams>
              <Donate></Donate>
              <Footer></Footer>
            </PageAboutUs>
          }
        />
        <Route
          path="/news"
          element={
            <PageNews>
              <Header></Header>
              <Breadcrumbs></Breadcrumbs>
              <Footer></Footer>
            </PageNews>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
