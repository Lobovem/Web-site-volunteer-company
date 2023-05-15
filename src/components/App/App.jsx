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
import {
  AboutUsWithHOC,
  ContactsWithHOC,
  DonateWithHOC,
  NewAllWithHOC,
  NewsWithHOC,
  OurRulesWithHOC,
  TeamsWithHOC,
  WayWithHOC,
} from '../SectionHOC/SectionHOC';

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
                classNameSectionWrap="sectionWrap"
                classNameTitleSection="titleSection"
                classNameSection="section"
              ></AboutUsWithHOC>

              <NewsWithHOC
                titleSection="новини"
                classNameSectionWrap="sectionWrap"
                classNameTitleSection="titleSection"
                classNameSection="sectionAlt"
              ></NewsWithHOC>

              <OurRulesWithHOC
                titleSection="наші результати"
                classNameSectionWrap="sectionWrap"
                classNameTitleSection="titleSection"
                classNameSection="section"
              ></OurRulesWithHOC>

              <WayWithHOC
                titleSection="напрямки підтримки"
                classNameSectionWrap="sectionWrap"
                classNameTitleSection="titleSection"
                classNameSection="sectionAlt"
              ></WayWithHOC>

              <DonateWithHOC classNameSectionWrap="sectionWrap" classNameTitleSection="visuallyHidden" classNameSection="section"></DonateWithHOC>

              <TeamsWithHOC
                titleSection="команда"
                classNameSectionWrap="sectionWrapAlt"
                classNameTitleSection="titleSection"
                classNameSection="sectionShort"
              ></TeamsWithHOC>

              <ContactsWithHOC
                titleSection="контакти"
                classNameSectionWrap="sectionWrap"
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
                titleSection="про нас"
                classNameSectionWrap="sectionWrapShort"
                classNameTitleSection="titleSection"
                classNameSection="section"
              ></AboutUsWithHOC>

              <TeamsWithHOC
                titleSection="команда"
                classNameSectionWrap="sectionWrapAlt"
                classNameTitleSection="titleSection"
                classNameSection="sectionShort"
              ></TeamsWithHOC>

              <DonateWithHOC classNameSectionWrap="sectionWrap" classNameTitleSection="visuallyHidden" classNameSection="section"></DonateWithHOC>

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

              <NewAllWithHOC
                titleSection="новини"
                classNameSectionWrap="sectionWrapShort"
                classNameTitleSection="titleSection"
                classNameSection="sectionAlt"
              ></NewAllWithHOC>
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
