import { useDispatch, useSelector } from 'react-redux';
import { burgerMenuSelector, isOpenBurgerMenu } from '../../store/reducer';
import s from './burger.module.scss';

export const Burger = () => {
  const burgerMenu = useSelector(burgerMenuSelector);
  const dispatch = useDispatch();

  return (
    <div className={!burgerMenu ? s.burger : `${s.burger} ${s.active}`} onClick={() => dispatch(isOpenBurgerMenu())}>
      <span className={s.burger__line}></span>
      <span className={s.burger__line}></span>
      <span className={s.burger__line}></span>
    </div>
  );
};
