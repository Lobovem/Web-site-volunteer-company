import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { DonateWithLayout, SimpleNewsnWithLayout } from '../SectionHOC/SectionHOC';
import { SimpleNews } from '../SimpleNews/SimpleNews';

export const PageSimpleNews = () => {
  return (
    <>
      <Breadcrumbs></Breadcrumbs>
      {/* <SimpleNewsnWithLayout
        titleSection="Якась дуже важлива новина перша"
        classNameSectionWrap="sectionWrapShortAlt"
        classNameTitleSection="titleSection"
        classNameSection="sectionAlt"
      ></SimpleNewsnWithLayout> */}

      <SimpleNews />

      <DonateWithLayout
        titleSection="Допомогти"
        classNameSectionWrap="sectionWrapShortLarge"
        classNameTitleSection="visuallyHidden"
        classNameSection="section"
      ></DonateWithLayout>
    </>
  );
};
