import { useDispatch, useSelector } from 'react-redux';
import { burgerMenuSelector, dataSelector, isOpenBurgerMenu } from '../../../store/reducer';
import s from './Burger.module.scss';

export const Burger = () => {
  const data = useSelector(dataSelector);
  const dispatch = useDispatch();

  // const handleClick = () => {
  //   // 👇️ toggle class on the body element
  //   document.body.classList.add('active');
  // };

  return (
    <div className={!data.burgerMenuState ? s.burger : `${s.burger} ${s.active}`} onClick={() => dispatch(isOpenBurgerMenu())}>
      <span className={s.burger__line}></span>
      <span className={s.burger__line}></span>
      <span className={s.burger__line}></span>
    </div>
  );
};
