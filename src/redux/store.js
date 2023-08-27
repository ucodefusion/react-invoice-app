// store.js

import { configureStore } from '@reduxjs/toolkit';
import invoiceReducer from './slices/invoiceSlice';

const store = configureStore({
    reducer: {
        invoiceData: invoiceReducer
    }
});

export default store;
