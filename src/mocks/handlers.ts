import { rest } from 'msw';
import { allProductsResponse, products, testSearchResponse } from './data';

export const handlers = [
  rest.get('https://dummyjson.com/products/search', (req, res, ctx) => {
    const searchQuery = req.url.searchParams.get('q');
    let response;

    if (!searchQuery) response = allProductsResponse;
    if (searchQuery === 'Test') response = testSearchResponse;

    return res(ctx.status(200), ctx.json(response));
  }),

  rest.get('https://dummyjson.com/products/1', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(products[0]));
  }),

  rest.get('https://dummyjson.com/products/404', (req, res, ctx) => {
    return res(ctx.status(404), ctx.json({ message: 'Product not found' }));
  }),
];
