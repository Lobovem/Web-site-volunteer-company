import { useSelector } from 'react-redux';
import { burgerMenuSelector } from '../store/reducer';
import { useEffect } from 'react';
import { PageHome } from '../PageHome/PageHome';

import { Header } from '../Header/Header';
import { Banner } from '../Banner/Banner';
import { Donate } from '../Donate/Donate';
import { Teams } from '../Teams/Teams';
import { Form } from '../Form/Form';
import { Footer } from '../Footer/Footer';
// import { Breadcrumbs } from '../Breadcrumbs/Breadcrumb';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; //importing routing elements
// import { ErrorPage } from './components/ErrorPage';
import { PageAboutUs } from '../PageAboutUs/PageAboutUs';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { PageNews } from '../PageNews/PageNews';
import { ErrorPage } from '../PageError/ErrorPage';
import { AboutUsWithHOC, ContactsWithHOC, DonateWithHOC, NewsWithHOC, OurRulesWithHOC, TeamsWithHOC, WayWithHOC } from '../SectionHOC/SectionHOC';

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
                titleSection="український гуманітарний батальйон"
                clasNameSectionWrap="sectionWrap"
                classNameTitleSection="titleSection"
                classNameSection="section"
              ></AboutUsWithHOC>

              <NewsWithHOC
                titleSection="новини"
                clasNameSectionWrap="sectionWrap"
                classNameTitleSection="titleSection"
                classNameSection="sectionAlt"
              ></NewsWithHOC>

              <OurRulesWithHOC
                titleSection="наші результати"
                clasNameSectionWrap="sectionWrap"
                classNameTitleSection="titleSection"
                classNameSection="section"
              ></OurRulesWithHOC>

              <WayWithHOC
                titleSection="напрямки підтримки"
                clasNameSectionWrap="sectionWrap"
                classNameTitleSection="titleSection"
                classNameSection="sectionAlt"
              ></WayWithHOC>

              <DonateWithHOC clasNameSectionWrap="sectionWrap" classNameTitleSection="visuallyHidden" classNameSection="section"></DonateWithHOC>

              <TeamsWithHOC
                titleSection="команда"
                clasNameSectionWrap="sectionWrapAlt"
                classNameTitleSection="titleSection"
                classNameSection="sectionShort"
              ></TeamsWithHOC>

              <ContactsWithHOC
                titleSection="контакти"
                clasNameSectionWrap="sectionWrap"
                classNameTitleSection="titleSection"
                classNameSection="section"
              ></ContactsWithHOC>

              <Form></Form>
              {/* <FormWithHOC></FormWithHOC> */}
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
              <AboutUsWithHOC
                titleSection="український гуманітарний батальйон"
                clasNameSectionWrap="sectionWrap"
                classNameTitleSection="titleSection"
                classNameSection="section"
              ></AboutUsWithHOC>

              <TeamsWithHOC
                titleSection="команда"
                clasNameSectionWrap="sectionWrapAlt"
                classNameTitleSection="titleSection"
                classNameSection="sectionShort"
              ></TeamsWithHOC>

              <DonateWithHOC clasNameSectionWrap="sectionWrap" classNameTitleSection="visuallyHidden" classNameSection="section"></DonateWithHOC>

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
