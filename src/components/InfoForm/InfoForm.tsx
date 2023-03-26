import React, { Component } from 'react';
import { IFormInfo } from '../../types';
import Button from '../Button';
import COUNTRIES from './countries';
import styles from './InfoForm.module.scss';

const isValidFullName = (fullName: string): boolean => {
  let isValid = true;

  const names = fullName.split(' ');
  if (names.length < 2) return false;

  names.forEach((name) => {
    if (name[0] === name[0].toLowerCase()) isValid = false;
  });

  return isValid;
};

type InfoFormProps = {
  onSubmit: (info: IFormInfo) => void;
};

export class InfoForm extends Component<InfoFormProps> {
  initialErrors = {
    fullNameError: '',
    birthdayError: '',
    countryError: '',
    ganderError: '',
    avatarError: '',
    policyError: '',
  };

  state = {
    errors: { ...this.initialErrors },
  };

  fullNameRef = React.createRef<HTMLInputElement>();
  birthdayRef = React.createRef<HTMLInputElement>();
  countryRef = React.createRef<HTMLSelectElement>();
  avatarRef = React.createRef<HTMLInputElement>();
  policyRef = React.createRef<HTMLInputElement>();
  subscribeRef = React.createRef<HTMLInputElement>();
  maleGenderRef = React.createRef<HTMLInputElement>();
  femaleGenderRef = React.createRef<HTMLInputElement>();

  resetForm = () => {
    [this.fullNameRef, this.birthdayRef, this.countryRef, this.avatarRef].forEach(
      (ref) => (ref.current!.value = '')
    );
    [this.policyRef, this.subscribeRef, this.maleGenderRef, this.femaleGenderRef].forEach(
      (ref) => (ref.current!.checked = false)
    );
  };

  validateForm = ({ fullName, birthday, country, gender, avatar, policy }: IFormInfo): boolean => {
    const errors = { ...this.initialErrors };
    let isError = false;

    if (!fullName) {
      errors.fullNameError = 'Please introduce yourself';
      isError = true;
    } else if (!isValidFullName(fullName)) {
      errors.fullNameError =
        'The full name must consist of at least two words starting with a capital letter';
      isError = true;
    }

    if (!birthday) {
      errors.birthdayError = 'Please choose your birthday';
      isError = true;
    }

    if (!country) {
      errors.countryError = 'Please choose your location';
      isError = true;
    }

    if (!avatar) {
      errors.avatarError = 'Please upload avatar picture';
      isError = true;
    }

    if (!policy) {
      errors.policyError = 'Please agree with our terms';
      isError = true;
    }

    if (!gender) {
      errors.ganderError = 'Please select gender';
      isError = true;
    }

    this.setState({ errors });
    return !isError;
  };

  getAvatar = (): string => {
    let avatar = '';
    if (this.avatarRef.current?.files?.length) {
      avatar = URL.createObjectURL(this.avatarRef.current.files[0]);
    }
    return avatar;
  };

  getGender = (): string => {
    let gender = '';
    if (this.maleGenderRef.current?.checked) gender = this.maleGenderRef.current.value;
    if (this.femaleGenderRef.current?.checked) gender = this.femaleGenderRef.current.value;
    return gender;
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fields = {
      fullName: this.fullNameRef.current?.value ?? '',
      birthday: this.birthdayRef.current?.value ?? '',
      country: this.countryRef.current?.value ?? '',
      subscribe: this.subscribeRef.current?.checked ?? false,
      policy: this.policyRef.current?.checked ?? false,
      avatar: this.getAvatar(),
      gender: this.getGender(),
    };

    const isValid = this.validateForm(fields);
    if (isValid) {
      this.props.onSubmit(fields);
      this.resetForm();
    }
  };

  render() {
    const { fullNameError, birthdayError, ganderError, countryError, avatarError, policyError } =
      this.state.errors;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="fullName">Full Name</label>
          <input
            className={styles.textInput}
            ref={this.fullNameRef}
            id="fullName"
            type="text"
            name="fullName"
            placeholder="Full Name"
          />
          {fullNameError && <div className={styles.error}>{fullNameError}</div>}
        </div>
        <div className={styles.row}>
          <label htmlFor="birthday">Birthday</label>
          <input
            className={styles.textInput}
            ref={this.birthdayRef}
            type="date"
            id="birthday"
            name="birthday"
          />
          {birthdayError && <div className={styles.error}>{birthdayError}</div>}
        </div>
        <div className={styles.row}>
          <label htmlFor="country">Location</label>
          <select
            className={styles.textInput}
            ref={this.countryRef}
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
          {countryError && <div className={styles.error}>{countryError}</div>}
        </div>
        <div className={styles.row}>
          <label>Gender</label>
          <div className={styles.radioGroup}>
            <label>
              <input ref={this.maleGenderRef} type="radio" name="gender" value="male" />
              Male
            </label>
            <label>
              <input ref={this.femaleGenderRef} type="radio" name="gender" value="female" />
              Female
            </label>
          </div>
          {ganderError && <div className={styles.error}>{ganderError}</div>}
        </div>
        <div className={styles.row}>
          <label htmlFor="avatar">Upload avatar</label>
          <div>
            <input
              ref={this.avatarRef}
              id="avatar"
              type="file"
              name="avatar"
              accept="image/*,.png,.jpg,.gif,.web"
            />
          </div>
          {avatarError && <div className={styles.error}>{avatarError}</div>}
        </div>
        <div className={styles.row}>
          <label>
            <input ref={this.subscribeRef} type="checkbox" /> I want to receive notifications about
            promo, sales, etc.
          </label>
        </div>
        <div className={styles.row}>
          <label>
            <input ref={this.policyRef} type="checkbox" /> I consent to the processing of my
            personal data
          </label>
          {policyError && <div className={styles.error}>{policyError}</div>}
        </div>
        <div>
          <Button title="Submit" type="submit" className={styles.submitButton} />
        </div>
      </form>
    );
  }
}

export default InfoForm;
