import styles from './ErrorMessage.module.scss';

function ErrorMessage() {
  return <p className={styles.message}>Something went wrong. Try again later.</p>;
}

export default ErrorMessage;
