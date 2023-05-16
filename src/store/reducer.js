import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  burgerMenuState: false,
  menuListData: [
    { id: 1, title: 'Про нас', link: '/about-us' },
    { id: 2, title: 'Новини', link: '/news' },
    { id: 3, title: 'Отримати допомогу', link: '/get-help' },
    { id: 4, title: 'Допомогти', link: '/help' },
    { id: 5, title: 'Контакти', link: '/contacts' },
    { id: 6, title: 'Звіти', link: '/result' },
  ],
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

export const burgerMenuSelector = (state) => state.app.burgerMenuState;
export const menuListSelector = (state) => state.app.menuListData;

export const { isOpenBurgerMenu } = appReducer.actions;
export default appReducer.reducer;
