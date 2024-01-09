// UserApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ProductsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),  
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'Products',
    }),
    
     
  }),

});


export const { useGetProductsQuery  } = ProductsApi;
export { ProductsApi };
