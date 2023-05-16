import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { DonateWithLayout, SimpleNewsnWithLayout } from '../SectionHOC/SectionHOC';

export const PageSimpleNews2 = () => {
  return (
    <>
      <Breadcrumbs></Breadcrumbs>
      <SimpleNewsnWithLayout
        titleSection="Друга новина"
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
