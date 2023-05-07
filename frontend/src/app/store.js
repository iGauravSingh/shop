import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/product/productSlice'
import selectedProductReducer from '../features/selectedProduct/selectedProductSlice'


export const store = configureStore({
    reducer:{
        product: productReducer,
        selectedProduct: selectedProductReducer
    }
})





