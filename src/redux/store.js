// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './componentSlice'; // Import your food slice

const reduxStore = configureStore({
  reducer: {
    cart: cartReducer, // Add your food reducer here
  },
});

export default reduxStore;
