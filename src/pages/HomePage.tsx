import { Component } from 'react';
import Layout from '../components/Layout/Layout';
import ProductsList from '../components/ProductsList/ProductsList';
import SearchBar from '../components/SearchBar/SearchBar';

export class HomePage extends Component {
  render() {
    return (
      <Layout title="Home Page">
        <SearchBar />
        <ProductsList />
      </Layout>
    );
  }
}

export default HomePage;
