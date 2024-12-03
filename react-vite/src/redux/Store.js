import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice.js'; 
import authReducer from './AuthSlice.js';
import addressSlice from './AddressSlice.js';
import orderReducer from './OrderSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    address: addressSlice,
    order: orderReducer,
  },
});
