import Layout from '../../components/Layout';
import ProductsList from '../../components/ProductsList';
import SearchBar from '../../components/SearchBar';

function HomePage() {
  return (
    <Layout title="Home Page">
      <div data-testid="home-page">
        <SearchBar />
        <ProductsList />
      </div>
    </Layout>
  );
}

export default HomePage;
