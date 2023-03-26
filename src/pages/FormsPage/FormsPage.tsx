import React, { Component } from 'react';
import Layout from '../../components/Layout';
import InfoForm from '../../components/InfoForm';
import { IFormInfo } from '../../types';
import FormCard from '../../components/FormCard';
import styles from './FormsPage.module.scss';
import ConfirmMessage from '../../components/ConfirmMessage';

type FormsPageProps = Record<string, never>;
type FormsPageState = {
  formCards: IFormInfo[];
  showMessage: boolean;
};

export class FormsPage extends Component<FormsPageProps, FormsPageState> {
  state = {
    formCards: [],
    showMessage: false,
  };

  handleSubmit = (info: IFormInfo) => {
    this.setState((state) => ({ formCards: [...state.formCards, info], showMessage: true }));
  };

  handleCloseMessage = () => {
    this.setState({ showMessage: false });
  };

  render() {
    const { formCards, showMessage } = this.state;

    return (
      <Layout title="Forms Page">
        <div data-testid="forms-page">
          <div className={styles.formContainer}>
            <InfoForm onSubmit={this.handleSubmit} />
          </div>
          <div className={styles.cardsContainer}>
            {formCards.map((card, idx) => (
              <FormCard cardInfo={card} key={idx} />
            ))}
          </div>
          {showMessage && <ConfirmMessage onClose={this.handleCloseMessage} />}
        </div>
      </Layout>
    );
  }
}

export default FormsPage;
