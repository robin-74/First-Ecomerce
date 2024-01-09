import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import ProductReducer from './Slice/ProductSlice'
import { ProductsApi } from '../thunk/ProductApi'
import { setupListeners } from '@reduxjs/toolkit/query';
 


export const store  =  configureStore({
    reducer: {
        Products: ProductReducer,
        [ProductsApi.reducerPath]:ProductsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ProductsApi.middleware),
});
setupListeners(store.dispatch)