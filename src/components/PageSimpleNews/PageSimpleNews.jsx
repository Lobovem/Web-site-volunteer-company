import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { DonateWithLayout, SimpleNewsnWithLayout } from '../SectionHOC/SectionHOC';

export const PageSimpleNews = () => {
  return (
    <>
      <Breadcrumbs></Breadcrumbs>
      <SimpleNewsnWithLayout
        classNameSectionWrap="sectionWrapShortAlt"
        classNameTitleSection="visuallyHidden"
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
