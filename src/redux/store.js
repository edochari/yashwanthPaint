import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slices/ProductSlice';
import { CartReducer } from './slices/CartSlice';
export const store=configureStore({
    reducer:{
        productsReducer:productsReducer,
        CartReducer:CartReducer
    }
})