import { createSlice } from '@reduxjs/toolkit';
import data from '../data/data.json';

// const initialState = {
//   burgerMenuState: false,
//   listMenu: [
//     { id: 1, title: 'Про нас', link: '/about-us' },
//     { id: 2, title: 'Новини', link: '/news' },
//     { id: 3, title: 'Отримати допомогу', link: '/get-help' },
//     { id: 4, title: 'Допомогти', link: '/help' },
//     { id: 5, title: 'Контакти', link: '/contacts' },
//     { id: 6, title: 'Звіти', link: '/result' },
//   ],
// };

const initialState = {
  allState: { data },
};

export const appReducer = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    isOpenBurgerMenu: (state, action) => {
      state.burgerMenuState = !state.burgerMenuState;
    },
  },
});

export const dataSelector = (state) => state.app.allState;
// export const listMenuSelector = (state) => state.app.allState.listMenuData;

export const { isOpenBurgerMenu } = appReducer.actions;
export default appReducer.reducer;
