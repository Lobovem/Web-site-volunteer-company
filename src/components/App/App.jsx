import { useSelector } from 'react-redux';
import { burgerMenuSelector } from '../store/reducer';
import { useEffect } from 'react';
import { PageHome } from '../PageHome/PageHome';

import { Header } from '../Header/Header';
import { Banner } from '../Banner/Banner';
import { Form } from '../Form/Form';
import { Footer } from '../Footer/Footer';
// import { Breadcrumbs } from '../Breadcrumbs/Breadcrumb';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //importing routing elements
// import { ErrorPage } from './components/ErrorPage';
import { PageAboutUs } from '../PageAboutUs/PageAboutUs';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { PageNews } from '../PageNews/PageNews';
import { ErrorPage } from '../PageError/ErrorPage';
import {
  AboutUsWithLayout,
  PaginationWithLayout,
  ContactsWithLayout,
  DonateWithLayout,
  NewsWithLayout,
  OurRulesWithLayout,
  TeamsWithLayout,
  WayWithLayout,
  FormWithLayout,
} from '../SectionHOC/SectionHOC';

export const App = () => {
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
              <AboutUsWithLayout
                titleSection="український гуманітарний батальйон"
                classNameSectionWrap="sectionWrap"
                classNameTitleSection="titleSection"
                classNameSection="section"
              ></AboutUsWithLayout>

              <NewsWithLayout
                titleSection="новини"
                classNameSectionWrap="sectionWrap"
                classNameTitleSection="titleSection"
                classNameSection="sectionAlt"
              ></NewsWithLayout>

              <OurRulesWithLayout
                titleSection="наші результати"
                classNameSectionWrap="sectionWrap"
                classNameTitleSection="titleSection"
                classNameSection="section"
              ></OurRulesWithLayout>

              <WayWithLayout
                titleSection="напрямки підтримки"
                classNameSectionWrap="sectionWrap"
                classNameTitleSection="titleSection"
                classNameSection="sectionAlt"
              ></WayWithLayout>

              <DonateWithLayout classNameSectionWrap="sectionWrap" classNameTitleSection="visuallyHidden" classNameSection="section"></DonateWithLayout>

              <TeamsWithLayout
                titleSection="команда"
                classNameSectionWrap="sectionWrapAlt"
                classNameTitleSection="titleSection"
                classNameSection="sectionShort"
              ></TeamsWithLayout>

              <ContactsWithLayout
                titleSection="контакти"
                classNameSectionWrap="sectionWrap"
                classNameTitleSection="titleSection"
                classNameSection="section"
              ></ContactsWithLayout>

              {/* <Form></Form> */}
              <FormWithLayout
                titleSection="форма зворотнього зв'язку"
                classNameSectionWrap="sectionWrapShort"
                classNameTitleSection="visuallyHidden"
                classNameSection="section"
              ></FormWithLayout>
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
              <AboutUsWithLayout
                titleSection="про нас"
                classNameSectionWrap="sectionWrapShort"
                classNameTitleSection="titleSection"
                classNameSection="section"
              ></AboutUsWithLayout>

              <TeamsWithLayout
                titleSection="команда"
                classNameSectionWrap="sectionWrapAlt"
                classNameTitleSection="titleSection"
                classNameSection="sectionShort"
              ></TeamsWithLayout>

              <DonateWithLayout classNameSectionWrap="sectionWrap" classNameTitleSection="visuallyHidden" classNameSection="section"></DonateWithLayout>

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

              <PaginationWithLayout
                titleSection="новини"
                classNameSectionWrap="sectionWrapShort"
                classNameTitleSection="titleSection"
                classNameSection="sectionAlt"
                itemsPerPage={3}
              ></PaginationWithLayout>
              {/* <Pagination itemsPerPage={3}></Pagination> */}

              <Footer></Footer>
            </PageNews>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
