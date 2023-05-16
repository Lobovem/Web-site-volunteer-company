import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { DonateWithLayout, SimpleNewsnWithLayout } from '../SectionHOC/SectionHOC';

export const PageSimpleNews = () => {
  return (
    <>
      <Breadcrumbs></Breadcrumbs>
      <SimpleNewsnWithLayout
        titleSection="Якась дуже важлива новина перша"
        classNameSectionWrap="sectionWrapShortAlt"
        classNameTitleSection="titleSection"
        classNameSection="sectionAlt"
      ></SimpleNewsnWithLayout>

      <DonateWithLayout
        titleSection="Допомогти"
        classNameSectionWrap="sectionWrapShortLarge"
        classNameTitleSection="visuallyHidden"
        classNameSection="section"
      ></DonateWithLayout>
    </>
  );
};
