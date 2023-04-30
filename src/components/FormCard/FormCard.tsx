import { IFormInfo } from '../../types';
import styles from './FormCard.module.scss';
import { ReactComponent as LocationIcon } from '../../assets/location-icon.svg';

type FormCardProps = {
  cardInfo: IFormInfo;
};

function FormCard({ cardInfo }: FormCardProps) {
  const { firstName, lastName, birthday, country, gender, avatar, subscribe } = cardInfo;
  const fullName = `${firstName} ${lastName}`;

  return (
    <div data-testid="form-card" className={styles.container}>
      <div>
        <img className={styles.avatar} src={avatar} alt={fullName} />
      </div>
      <div>
        <h3 className={styles.title}>{fullName}</h3>
        <p className={styles.row}>
          <span className={styles.icon}>
            <LocationIcon />
          </span>
          {country}
        </p>
        <p className={styles.row}>
          <span className={styles.icon}>
            {gender === 'male' && '👨‍🎓'}
            {gender === 'female' && '👩‍🎓'}
          </span>
          {gender} student
        </p>
        <p className={styles.row}>
          <span className={styles.icon}>🎂</span>
          {birthday}
        </p>
        <p className={styles.row}>
          <span className={styles.icon}>{subscribe ? '✔️' : '❌'}</span>
          Subscription to notifications
        </p>
      </div>
      <div>
        <p className={styles.policy}>
          The user has consented to the processing of personal data and all our terms 😈
        </p>
      </div>
    </div>
  );
}

export default FormCard;
