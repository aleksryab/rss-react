import { IProduct } from '../../types';
import ProductCard from '../ProductCard';
import styles from './ProductList.module.scss';

type ProductListProps = {
  products: IProduct[];
};

function ProductsList({ products }: ProductListProps) {
  const isEmptyList = !products.length;

  if (isEmptyList) return <p className={styles.emptyMessage}>Products not found!</p>;

  return (
    <div className={styles.list}>
      {products.map((product: IProduct) => (
        <div className={styles.item} key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
