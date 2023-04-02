import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import './SearchBar.scss';

const SEARCH_TEXT_KEY = 'search-text';

function SearchBar() {
  const [searchText, setSearchText] = useState(localStorage.getItem(SEARCH_TEXT_KEY) ?? '');
  const searchTextRef = useRef(searchText);

  useEffect(() => {
    searchTextRef.current = searchText;
  }, [searchText]);

  useEffect(() => {
    const saveSearchToLocalStorage = () => {
      localStorage.setItem(SEARCH_TEXT_KEY, searchTextRef.current);
    };

    window.addEventListener('beforeunload', saveSearchToLocalStorage);

    return () => {
      saveSearchToLocalStorage();
      window.removeEventListener('beforeunload', saveSearchToLocalStorage);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <label className="search-bar__label" htmlFor="search-product">
        <SearchIcon />
      </label>
      <input
        type="text"
        name="search"
        placeholder="Search product"
        id="search-product"
        className="search-bar__input"
        value={searchText}
        onChange={handleInputChange}
      />
    </form>
  );
}

export default SearchBar;
