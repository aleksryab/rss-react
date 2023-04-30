import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct, IProductsResponse } from '../types';

export const productsApi = createApi({
  reducerPath: 'ProductsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    searchProducts: builder.query<IProduct[], string>({
      query: (search) => ({
        url: 'products/search',
        params: {
          q: search,
        },
      }),
      transformResponse: (response: IProductsResponse) => response.products,
    }),

    getProduct: builder.query<IProduct, number>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useSearchProductsQuery, useGetProductQuery } = productsApi;
