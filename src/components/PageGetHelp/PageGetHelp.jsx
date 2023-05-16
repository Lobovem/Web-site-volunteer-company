import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { FormWithLayout } from '../SectionHOC/SectionHOC';
import s from './PageGetHelp.module.scss';

export const PageGetHelp = () => {
  return (
    <>
      <Breadcrumbs />

      <FormWithLayout
        titleSection="Звʼязжіться з нами будь-яким зручним для вас засобом зазаначеним у розділі контакти або скористайтесь формою нижче"
        classNameSectionWrap="sectionWrapShort"
        classNameTitleSection="titleSectionAlt"
        classNameSection="section"
      />
    </>
  );
};
