import { useSearchProductsQuery } from '../../store/productsApi';
import { useAppSelector } from '../../hooks/redux';
import useActions from '../../hooks/useActions';
import Layout from '../../components/Layout';
import ProductsList from '../../components/ProductsList';
import SearchBar from '../../components/SearchBar';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import './HomePage.scss';

function HomePage() {
  const searchQuery = useAppSelector((state) => state.products.searchQuery);
  const { saveSearchQuery } = useActions();

  const { data = [], isFetching, isError } = useSearchProductsQuery(searchQuery);

  return (
    <Layout title="Home Page">
      <div data-testid="home-page" className="home-page">
        <section className="home-page__search">
          <SearchBar onSearch={saveSearchQuery} initialSearchText={searchQuery} />
        </section>
        <section className="home-page__products">
          {isFetching ? <Loader /> : isError ? <ErrorMessage /> : <ProductsList products={data} />}
        </section>
      </div>
    </Layout>
  );
}

export default HomePage;
