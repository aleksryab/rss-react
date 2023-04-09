import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormInfo } from '../../types';
import Button from '../Button';
import COUNTRIES from './constants/countries';
import ERROR_MESSAGES from './constants/errorMessages';
import styles from './InfoForm.module.scss';

type InfoFormProps = {
  onSubmit: (info: IFormInfo) => void;
};

interface IFormInputs {
  firstName: string;
  lastName: string;
  birthday: string;
  country: string;
  gender: string;
  subscribe: boolean;
  policy: boolean;
  avatar: FileList;
}

function InfoForm({ onSubmit }: InfoFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>();

  const collectInfo: SubmitHandler<IFormInputs> = (data) => {
    const avatar = URL.createObjectURL(data.avatar[0]);
    onSubmit({ ...data, avatar });
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(collectInfo)}>
      <div className={styles.row}>
        <label className={styles.label} htmlFor="firstName">
          First Name
        </label>
        <input
          {...register('firstName', {
            required: ERROR_MESSAGES.name.empty,
            pattern: {
              value: /^[A-Z]/,
              message: ERROR_MESSAGES.name.pattern,
            },
          })}
          className={`${styles.textInput} ${errors.firstName ? styles.textInputError : ''}`}
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
        />
        {errors.firstName && <p className={styles.error}>{errors.firstName.message}</p>}
      </div>
      <div className={styles.row}>
        <label className={styles.label} htmlFor="lastName">
          Last Name
        </label>
        <input
          {...register('lastName', {
            required: ERROR_MESSAGES.name.empty,
            pattern: {
              value: /^[A-Z]/,
              message: ERROR_MESSAGES.name.pattern,
            },
          })}
          className={`${styles.textInput} ${errors.lastName ? styles.textInputError : ''}`}
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
        />
        {errors.lastName && <p className={styles.error}>{errors.lastName.message}</p>}
      </div>
      <div className={styles.row}>
        <label className={styles.label} htmlFor="birthday">
          Birthday
        </label>
        <input
          {...register('birthday', { required: ERROR_MESSAGES.birthday })}
          className={`${styles.textInput} ${errors.birthday ? styles.textInputError : ''}`}
          type="date"
          id="birthday"
          name="birthday"
        />
        {errors.birthday && <p className={styles.error}>{errors.birthday.message}</p>}
      </div>
      <div className={styles.row}>
        <label className={styles.label} htmlFor="country">
          Location
        </label>
        <select
          {...register('country', { required: ERROR_MESSAGES.country })}
          className={`${styles.textInput} ${errors.country ? styles.textInputError : ''}`}
          id="country"
          name="country"
          defaultValue=""
        >
          <option value="" disabled>
            Choose your country
          </option>
          {COUNTRIES.map((country) => (
            <option key={country.name}>{country.name}</option>
          ))}
        </select>
        {errors.country && <p className={styles.error}>{errors.country.message}</p>}
      </div>
      <div className={styles.row}>
        <label className={styles.label}>Gender</label>
        <div className={styles.radioGroup}>
          <label>
            <input
              {...register('gender', { required: ERROR_MESSAGES.gender })}
              type="radio"
              name="gender"
              value="male"
            />
            Male
          </label>
          <label>
            <input
              {...register('gender', { required: ERROR_MESSAGES.gender })}
              type="radio"
              name="gender"
              value="female"
            />
            Female
          </label>
        </div>
        {errors.gender && <p className={styles.error}>{errors.gender.message}</p>}
      </div>
      <div className={styles.row}>
        <label className={styles.label} htmlFor="avatar">
          Upload avatar
        </label>
        <div>
          <input
            {...register('avatar', { required: ERROR_MESSAGES.avatar })}
            id="avatar"
            type="file"
            name="avatar"
            accept="image/*,.png,.jpg,.gif,.web"
          />
        </div>
        {errors.avatar && <div className={styles.error}>{errors.avatar.message}</div>}
      </div>
      <div className={styles.row}>
        <label>
          <input {...register('subscribe')} type="checkbox" name="subscribe" /> I want to receive
          notifications about promo, sales, etc.
        </label>
      </div>
      <div className={styles.row}>
        <label>
          <input
            {...register('policy', { required: ERROR_MESSAGES.policy })}
            type="checkbox"
            name="policy"
          />
          I consent to the processing of my personal data.
        </label>
        {errors.policy && <div className={styles.error}>{errors.policy.message}</div>}
      </div>
      <div>
        <Button title="Submit" type="submit" className={styles.submitButton} />
      </div>
    </form>
  );
}

export default InfoForm;
