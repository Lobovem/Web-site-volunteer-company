// import { useDispatch, useSelector } from 'react-redux';
// import { burgerMenuSelector, burgerMenuState, isOpenBurgerMenu, listMenuSelector } from '../../store/reducer';
// import s from './Menu.module.scss';
// import { Link } from 'react-router-dom';

// export const Menu = () => {
//   const dispatch = useDispatch();
//   const burgerMenu = useSelector(burgerMenuState);
//   const listMenu = useSelector(listMenuSelector);

//   return (
//     <nav className={!burgerMenu ? s.menu : `${s.menu} ${s.active}`}>
//       <ul className={s.menu__list} onClick={() => dispatch(isOpenBurgerMenu())}>
//         {listMenu.map((item) => {
//           if (item.title !== 'Звіти')
//             return (
//               <li key={item.id} className={s.menu__item}>
//                 <Link to={item.link} className={s.menu__link}>
//                   {item.title}
//                 </Link>
//               </li>
//             );
//           return null;
//         })}
//       </ul>
//     </nav>
//   );
// };
