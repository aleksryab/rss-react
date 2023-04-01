import { IProduct } from '../../types';
import Button from '../Button';
import './ProductCard.scss';

type ProductCardProps = {
  product: IProduct;
};

function ProductCard({ product }: ProductCardProps) {
  const { title, category, thumbnail, price } = product;

  return (
    <div data-testid="product-card" className="product-card">
      <div className="product-card__body">
        <img src={thumbnail} alt={title} className="product-card__image" />
      </div>
      <div className="product-card__body">
        <div className="product-card__caption">
          <h3 className="product-card__title">
            <a href="#">{title}</a>
          </h3>
          <a href="#" className="product-card__category">
            {category}
          </a>
        </div>
        <div className="product-card__price">${price}</div>
        <div className="product-card__button">
          <Button type="button" title="Add to cart" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
