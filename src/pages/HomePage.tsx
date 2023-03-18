import { Component } from 'react';
import Layout from '../components/Layout/Layout';
import SearchBar from '../components/SearchBar/SearchBar';

export class HomePage extends Component {
  render() {
    return (
      <Layout title="Home Page">
        <div>
          <SearchBar />
        </div>
      </Layout>
    );
  }
}

export default HomePage;
