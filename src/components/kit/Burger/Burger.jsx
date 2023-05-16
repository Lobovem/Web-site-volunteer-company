import { useDispatch, useSelector } from 'react-redux';
import s from './Burger.module.scss';
import { burgerMenuSelector, changeBurgerState } from '../../../redux/slice/contentSlice';

export const Burger = () => {
  const burgerMenu = useSelector(burgerMenuSelector);
  const dispatch = useDispatch();

  return (
    <div className={!burgerMenu ? s.burger : `${s.burger} ${s.active}`} onClick={() => dispatch(changeBurgerState(!burgerMenu))}>
      <span className={s.burger__line}></span>
      <span className={s.burger__line}></span>
      <span className={s.burger__line}></span>
    </div>
  );
};
