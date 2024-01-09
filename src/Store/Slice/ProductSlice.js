
import { createSlice } from '@reduxjs/toolkit'
import { DataP } from '../../data/data';
import { useGetProductsQuery } from '../../thunk/ProductApi';
 
const initialState = {
    
    products:DataP,
    cathegory: '' , 
    Search: '',
    price: null,
    cart: [],
    ProductList: [],
};

 const ProductSlice = createSlice({
    initialState, 
    name:'Products',
    reducers: {
      SortDesc: (state, action) => {
       
        const {  price } = action.payload;
      state.price = price;
      },
      SortDesc2: (state,action) => {
        state.cathegory = action.payload;
      },
      SetSearch: (state,action ) => {
        state.Search = action.payload
        
      },
     // setCart: (state ,action) => {
     //   state.cart.push(action.payload)
     // }
     setCart: (state, action) => {
      const existingProductIndex = state.cart.findIndex((item) => item.id === action.payload.id);

      if (existingProductIndex !== -1) {
        // If the product already exists in the cart, increment the quantity
        state.cart[existingProductIndex].quantity += 1;
      } else {
        // If the product is not in the cart, add it with quantity 1
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    setAmount: (state, action) => {
      const { id, quantity } = action.payload;
      const existingProductIndex = state.cart.findIndex((item) => item.id === id);

      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity = quantity;
      }
    },
    setDelete: (state , action ) => {
      const productId = action.payload ;
      state.cart = state.cart.filter((item) => item.id !== productId);
    }
  


    },
    extraReducers: (builder) => {
         } ,

    
 })
 export const { 
    SortDesc , SortDesc2  , SetSearch  , setAmount , setCart  , setDelete
 } = ProductSlice.actions
 export default ProductSlice.reducer;
 