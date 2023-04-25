import s from './burger.module.scss';

export const Burger = ({ handleClick, state }) => {
  return (
    <div className={state ? `${s.burger} ${s.active}` : s.burger} onClick={handleClick}>
      <span className={s.burger__line}></span>
      <span className={s.burger__line}></span>
      <span className={s.burger__line}></span>
    </div>
  );
};
