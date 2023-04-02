import Button from '../Button';
import styles from './ConfirmMessage.module.scss';

type ConfirmMessageProps = {
  onClose: () => void;
};

function ConfirmMessage({ onClose }: ConfirmMessageProps) {
  return (
    <div className={styles.wrapper} onClick={onClose}>
      <div className={styles.body} onClick={(e) => e.stopPropagation()}>
        <p>The data has been saved!</p>
        <Button title="OK" onClick={onClose} />
      </div>
    </div>
  );
}

export default ConfirmMessage;
