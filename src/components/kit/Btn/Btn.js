import s from './btn.module.scss';

export const Btn = (props) => {
  const { title, onClick, nameClass } = props;
  return (
    <button className={s[nameClass]} type="button" onClick={onClick}>
      {title}
    </button>
  );
};
