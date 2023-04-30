import { useState } from 'react';
import { IProduct } from '../../types';
import ProductCard from '../ProductCard';
import styles from './ProductList.module.scss';
import { createPortal } from 'react-dom';
import FullProductCard from '../FullProductCard/FullProductCard';

type ProductListProps = {
  products: IProduct[];
};

function ProductsList({ products }: ProductListProps) {
  const [fullCardId, setFullCardId] = useState<null | number>(null);

  const isEmptyList = !products.length;

  if (isEmptyList) return <p className={styles.emptyMessage}>Products not found!</p>;

  return (
    <>
      <div className={styles.list}>
        {products.map((product: IProduct) => (
          <div className={styles.item} key={product.id} onClick={() => setFullCardId(product.id)}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      {fullCardId &&
        createPortal(
          <FullProductCard id={fullCardId} onClose={() => setFullCardId(null)} />,
          document.body
        )}
    </>
  );
}

export default ProductsList;
