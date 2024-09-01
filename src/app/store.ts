// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import coffeeReducer from './features/coffeeSlice/coffeeSlide';

export const store = configureStore({
  reducer: {
    products: coffeeReducer,
  },
});

export default store;
