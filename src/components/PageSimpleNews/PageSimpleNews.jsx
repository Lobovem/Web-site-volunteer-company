import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { DonateWithLayout, SimpleNewsnWithLayout } from '../SectionHOC/SectionHOC';
import { SimpleNews } from '../SimpleNews/SimpleNews';

export const PageSimpleNews = ({ news }) => {
  console.log('news=====>', news);

  return (
    <>
      <Breadcrumbs></Breadcrumbs>
      <SimpleNewsnWithLayout
        titleSection="Якась дуже важлива новина перша"
        classNameSectionWrap="sectionWrapShortAlt"
        classNameTitleSection="titleSection"
        classNameSection="sectionAlt"
      ></SimpleNewsnWithLayout>

      {/* <SimpleNews /> */}

      <DonateWithLayout
        titleSection="Допомогти"
        classNameSectionWrap="sectionWrapShortLarge"
        classNameTitleSection="visuallyHidden"
        classNameSection="section"
      ></DonateWithLayout>
    </>
  );
};
