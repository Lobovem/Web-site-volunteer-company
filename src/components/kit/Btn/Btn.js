import s from './btn.module.scss';

export const Btn = (props) => {
  const { title, onClick } = props;
  return (
    <button className={s.btn} type="button" onClick={onClick}>
      {title}
    </button>
  );
};
