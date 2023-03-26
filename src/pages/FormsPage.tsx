import React, { Component } from 'react';
import Layout from '../components/Layout';
import InfoForm from '../components/InfoForm';
import { IFormInfo } from '../types';
import FormCard from '../components/FormCard';

type FormsPageProps = Record<string, never>;
type FormsPageState = {
  formCards: IFormInfo[];
};

export class FormsPage extends Component<FormsPageProps, FormsPageState> {
  state = {
    formCards: [],
  };

  handleSubmit = (info: IFormInfo) => {
    this.setState((state) => ({ formCards: [...state.formCards, info] }));
  };

  render() {
    const { formCards } = this.state;

    return (
      <Layout title="Forms Page">
        <div data-testid="forms-page">
          <div>
            <InfoForm onSubmit={this.handleSubmit} />
          </div>
          <div>
            {formCards.map((card, idx) => (
              <FormCard cardInfo={card} key={idx} />
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}

export default FormsPage;
