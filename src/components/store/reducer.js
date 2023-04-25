import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  burgerMenuState: false,
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

export const { isOpenBurgerMenu } = appReducer.actions;
export default appReducer.reducer;
