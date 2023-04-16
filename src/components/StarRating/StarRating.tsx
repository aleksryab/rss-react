import styles from './StarRating.module.scss';

const MAX_RATING = 5;

type StarRatingProps = {
  rating: number;
};

function StarRating({ rating }: StarRatingProps) {
  const percentRating = (rating / MAX_RATING) * 100;

  return (
    <div
      className={styles.rating}
      style={{ '--rating': `${percentRating}%` } as React.CSSProperties}
    >
      ★★★★★
    </div>
  );
}

export default StarRating;
