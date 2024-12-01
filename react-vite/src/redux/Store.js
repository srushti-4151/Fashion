import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice.js'; 
import authReducer from './AuthSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});
