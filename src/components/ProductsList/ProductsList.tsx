import { useEffect, useState } from 'react';
import { IProduct, IResponse } from '../../types';
import ProductCard from '../ProductCard';
import './ProductList.scss';

function ProductsList() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=21')
      .then((response) => response.json() as Promise<IResponse>)
      .then((data) => {
        setProducts(data.products);
        setIsLoading(false);
      })
      .catch(() => console.error('Server Error!'));
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="product-list">
          {products.map((product: IProduct) => (
            <div className="product-list__item" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ProductsList;
