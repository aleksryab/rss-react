import { Component } from 'react';
import Layout from '../components/Layout';
import ProductsList from '../components/ProductsList';
import SearchBar from '../components/SearchBar/';

export class HomePage extends Component {
  render() {
    return (
      <Layout title="Home Page">
        <div data-testid="home-page">
          <SearchBar />
          <ProductsList />
        </div>
      </Layout>
    );
  }
}

export default HomePage;
