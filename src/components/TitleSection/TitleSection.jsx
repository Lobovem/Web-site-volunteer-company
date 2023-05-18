import s from './TitleSection.module.scss';

export const TitleSection = (props) => {
  const { title, classNameTitle } = props;
  return <h2 className={s[classNameTitle]}>{title}</h2>;
};
