import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import devicesReducer from './slices/devicesSlice';
import productsReducer from './slices/productsSlice';
import cartReducer from './slices/cartSlice';



export const store = configureStore({
  reducer: {
    auth: authReducer,
    devices: devicesReducer,
    products: productsReducer,
    cart: cartReducer,


  },
});
