import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import { IProduct } from '../../types';
import styles from './FullProductCard.module.scss';
import StarRating from '../StarRating/StarRating';
import Button from '../Button/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

type FullProductCardProps = {
  id: number;
  onClose: () => void;
};

function FullProductCard({ id, onClose }: FullProductCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error('Product not found');
        return response.json() as Promise<IProduct>;
      })
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [id]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={styles.wrapper} onClick={onClose}>
      <div className={styles.body} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close card"
          className={styles.closeButton}
        >
          <span className={styles.closeIcon}></span>
        </button>

        {isLoading && <Loader />}
        {isError && <ErrorMessage />}

        {product && (
          <div className={styles.cardContent}>
            <div className={styles.cardColumn}>
              <div className={styles.header}>
                <h2 className={styles.title}>{product.title}</h2>
                <StarRating rating={product.rating} />
              </div>
              <p className={styles.description}>{product.description}</p>
              <p>
                <span className={styles.subtitle}>Brand: </span>
                {product.brand}
              </p>
              <p>
                <span className={styles.subtitle}>Category: </span>
                {product.category}
              </p>
              <p>
                <span className={styles.subtitle}>Discount: </span>
                {product.discountPercentage}%
              </p>
              <p>
                <span className={styles.subtitle}>In stock: </span>
                {product.stock}
              </p>
              <div className={styles.addToCart}>
                <p className={styles.price}>${product.price}</p>
                <Button type="button" title="Add to cart" />
              </div>
            </div>
            <div className={styles.cardColumn}>
              <img src={product.thumbnail} alt={product.title} className={styles.productImage} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FullProductCard;
