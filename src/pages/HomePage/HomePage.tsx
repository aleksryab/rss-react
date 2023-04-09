import { useEffect, useState } from 'react';
import { IProduct, IResponse } from '../../types';
import Layout from '../../components/Layout';
import ProductsList from '../../components/ProductsList';
import SearchBar from '../../components/SearchBar';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import './HomePage.scss';

const SEARCH_TEXT_KEY = 'search-text';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem(SEARCH_TEXT_KEY) ?? '');
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
      .then((response) => {
        if (!response.ok) throw new Error('Server Error');
        return response.json() as Promise<IResponse>;
      })
      .then((data) => {
        setProducts(data.products);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    localStorage.setItem(SEARCH_TEXT_KEY, query);
    setSearchQuery(query);
  };

  return (
    <Layout title="Home Page">
      <div data-testid="home-page" className="home-page">
        <section className="home-page__search">
          <SearchBar onSearch={handleSearch} initialSearchText={searchQuery} />
        </section>
        <section className="home-page__products">
          {isLoading ? (
            <Loader />
          ) : isError ? (
            <ErrorMessage />
          ) : (
            <ProductsList products={products} />
          )}
        </section>
      </div>
    </Layout>
  );
}

export default HomePage;
