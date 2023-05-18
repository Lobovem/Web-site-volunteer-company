import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { DonateWithLayout, SimpleNewsnWithLayout } from '../SectionHOC/SectionHOC';
import { listNewsSelector } from '../../redux/slice/contentSlice';
import { useSelector } from 'react-redux';

export const PageSimpleNews = () => {
  const { newsId } = useParams();
  const listNews = useSelector(listNewsSelector);

  const news = listNews.find((item) => item.id === newsId);

  // console.log('newsTitle', news.title);

  return (
    <>
      <Breadcrumbs></Breadcrumbs>
      <SimpleNewsnWithLayout
        titleSection={news.title}
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
