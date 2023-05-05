import s from './Btn.module.scss';

export const Btn = (props) => {
  const { title, onClick, className } = props;
  return (
    <button className={s[className]} type="button" onClick={onClick}>
      {title}
    </button>
  );
};
