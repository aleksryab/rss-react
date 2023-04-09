export const products = [
  {
    id: 1,
    title: 'First product',
    description: 'Description of first product',
    price: 1111,
    discountPercentage: 11.11,
    rating: 4.44,
    stock: 100,
    brand: 'Brand name',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',
      'https://i.dummyjson.com/data/products/1/2.jpg',
      'https://i.dummyjson.com/data/products/1/3.jpg',
      'https://i.dummyjson.com/data/products/1/4.jpg',
      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },

  {
    id: 2,
    title: 'Second product',
    description: 'Description of second product',
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/2/1.jpg',
      'https://i.dummyjson.com/data/products/2/2.jpg',
      'https://i.dummyjson.com/data/products/2/3.jpg',
      'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
    ],
  },
];

export const allProductsResponse = {
  products: products,
  total: 2,
  skip: 0,
  limit: 2,
};

export const testSearchResponse = {
  products: [
    {
      id: 100,
      title: 'Searched product',
      description: 'Description of searched product',
      price: 1111,
      discountPercentage: 11.11,
      rating: 4.44,
      stock: 100,
      brand: 'Brand name',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/1/1.jpg',
        'https://i.dummyjson.com/data/products/1/2.jpg',
        'https://i.dummyjson.com/data/products/1/3.jpg',
        'https://i.dummyjson.com/data/products/1/4.jpg',
        'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      ],
    },
  ],
  total: 1,
  skip: 0,
  limit: 1,
};
