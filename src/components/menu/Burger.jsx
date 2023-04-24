import s from './burger.module.scss';

export const Burger = () => {
  return (
    <div className={s.burger}>
      <span className={s.burger__line}></span>
      <span className={s.burger__line}></span>
      <span className={s.burger__line}></span>
    </div>
  );
};
