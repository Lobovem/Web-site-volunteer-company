// import configureStore from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './reducer';

export const store = configureStore({
  reducer: {
    app: appReducer.reducer,
  },
});
