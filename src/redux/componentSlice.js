// src/features/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  section: 'default',
};

const cartSlice = createSlice({
  name: 'cart', // Keep this name consistent
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = action.payload;
      state.items.splice(index, 1);
    },
    setSection: (state, action) => {
      state.section = action.payload;
    },
  },
});

export const { addItem, removeItem, setSection } = cartSlice.actions;
export default cartSlice.reducer;
