// src/features/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],  // Make sure this is an empty array
  section: 'default',
};

const cartSlice = createSlice({
  name: 'cart', // Keep this name consistent
  initialState,
  reducers: {
    addItem: (state, action) => {
      // Check if the item already exists in the items array
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (!existingItem) {
        // If it doesn't exist, push the new item to the items array
        state.items.push({ ...action.payload, quantity: 1 }); // Optionally, you can include a quantity
      } else {
        // If it exists, update the quantity or any other property you want
        existingItem.quantity += 1; // Increment quantity
      }
    },
    removeItem: (state, action) => {
      // Filter out the item to remove it from the items array
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setSection: (state, action) => {
      state.section = action.payload;
    },
    updateItemQuantity: (state, action) => {
      const { id, quantity, operation } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        if (operation === 'add') {
          existingItem.quantity += quantity; // Increase quantity
        } else if (operation === 'remove') {
          existingItem.quantity = Math.max(0, existingItem.quantity - quantity); // Decrease quantity but don't go below 0
        }
      }
    },
  },
});

// Exporting actions
export const { addItem, removeItem, setSection,updateItemQuantity} = cartSlice.actions;
// Exporting the reducer
export default cartSlice.reducer;
