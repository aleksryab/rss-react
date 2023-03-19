import React, { Component } from 'react';
import { IProduct, IResponse } from '../../types';
import ProductCard from '../ProductCard';
import './ProductList.scss';

type ProductsListState = {
  isLoading: boolean;
  products: IProduct[];
};

export class ProductsList extends Component<Record<string, never>, ProductsListState> {
  state = {
    isLoading: true,
    products: [],
  };

  componentDidMount(): void {
    fetch('https://dummyjson.com/products?limit=21')
      .then((response) => response.json() as Promise<IResponse>)
      .then((data) => this.setState({ isLoading: false, products: data.products }));
  }

  render() {
    const { isLoading, products } = this.state;

    if (isLoading) return <div className="loader">Loading...</div>;

    return (
      <div className="product-list">
        {products.map((product: IProduct) => (
          <div className="product-list__item" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    );
  }
}

export default ProductsList;
