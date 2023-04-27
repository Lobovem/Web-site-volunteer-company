import s from './titleMain.module.scss';

export const TitleMain = (props) => {
  const { title } = props;

  return (
    <h2 className={s.titleMain}>
      <span className={s.titleMain__gradient}>{title}</span>
    </h2>
  );
};
