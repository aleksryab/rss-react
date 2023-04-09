import { useEffect, useState } from 'react';
import { IProduct, IResponse } from '../../types';
import Layout from '../../components/Layout';
import ProductsList from '../../components/ProductsList';
import SearchBar from '../../components/SearchBar';
import Loader from '../../components/Loader/Loader';

const SEARCH_TEXT_KEY = 'search-text';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem(SEARCH_TEXT_KEY) ?? '');
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
      .then((response) => response.json() as Promise<IResponse>)
      .then((data) => {
        setProducts(data.products);
        setIsLoading(false);
      })
      .catch(() => console.error('Server Error!'));
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    localStorage.setItem(SEARCH_TEXT_KEY, query);
    setSearchQuery(query);
  };

  return (
    <Layout title="Home Page">
      <div data-testid="home-page">
        <SearchBar onSearch={handleSearch} initialSearchText={searchQuery} />
        {isLoading ? <Loader /> : <ProductsList products={products} />}
      </div>
    </Layout>
  );
}

export default HomePage;
