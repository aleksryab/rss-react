import React, { Component } from 'react';
import { IFormInfo } from '../../types';
import COUNTRIES from './countries';

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

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = { ...this.initialErrors };
    let isError = false;

    if (!this.fullNameRef.current?.value) {
      errors.fullNameError = 'Please introduce yourself';
      isError = true;
    }

    if (!this.birthdayRef.current?.value) {
      errors.birthdayError = 'Please choose your birthday';
      isError = true;
    }

    if (!this.countryRef.current?.value) {
      errors.countryError = 'Please choose country';
      isError = true;
    }

    if (!this.avatarRef.current?.value) {
      errors.avatarError = 'Please choose avatar picture';
      isError = true;
    }

    if (!this.policyRef.current?.checked) {
      errors.policyError = 'Please agree with our terms';
      isError = true;
    }

    let checkedGender = '';
    if (this.maleGenderRef.current?.checked) checkedGender = this.maleGenderRef.current.value;
    if (this.femaleGenderRef.current?.checked) checkedGender = this.femaleGenderRef.current.value;
    if (!checkedGender) {
      errors.ganderError = 'Please select gender';
      isError = true;
    }

    // this.setState({ errors: { fullNameError, birthdayError, countryError } });
    if (!isError) {
      this.props.onSubmit({
        fullName: this.fullNameRef.current!.value,
        birthday: this.birthdayRef.current!.value,
        country: this.countryRef.current!.value,
        gender: checkedGender,
        avatar: this.avatarRef.current!.value,
        subscribe: this.subscribeRef.current!.checked,
      });
    }

    this.setState({ errors });
  };

  render() {
    const { fullNameError, birthdayError, ganderError, countryError, avatarError, policyError } =
      this.state.errors;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input ref={this.fullNameRef} type="text" placeholder="Full Name" />
          <div>{fullNameError}</div>
        </div>
        <div>
          <label>
            Birthday
            <input ref={this.birthdayRef} type="date" />
          </label>
          <div>{birthdayError}</div>
        </div>
        <div>
          <select ref={this.countryRef} defaultValue="">
            <option value="" disabled>
              Choose your country
            </option>
            {COUNTRIES.map((country) => (
              <option key={country.name}>{country.name}</option>
            ))}
          </select>
          <div>{countryError}</div>
        </div>
        <div>
          <label>
            <input ref={this.maleGenderRef} type="radio" name="gender" value="male" />
            Male
          </label>
          <label>
            <input ref={this.femaleGenderRef} type="radio" name="gender" value="female" />
            Female
          </label>
          <div>{ganderError}</div>
        </div>
        <div>
          <label>
            Upload avatar
            <input ref={this.avatarRef} type="file" accept="image/*,.png,.jpg,.gif,.web" />
          </label>
          <div>{avatarError}</div>
        </div>
        <div>
          <label>
            <input ref={this.policyRef} type="checkbox" /> I consent to the processing of my
            personal data
          </label>
          <div>{policyError}</div>
        </div>
        <div>
          <label>
            <input ref={this.subscribeRef} type="checkbox" /> I want to receive notifications about
            promo, sales, etc.
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default InfoForm;
