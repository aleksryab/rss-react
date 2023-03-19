import { Component } from 'react';
import Layout from '../components/Layout';

export class AboutPage extends Component {
  render() {
    return (
      <Layout title="About Us Page">
        <div data-testid="about-page">
          <h2>This is About Us Page</h2>
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
