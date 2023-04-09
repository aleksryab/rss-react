import { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import './SearchBar.scss';

type SearchBarProps = {
  onSearch: (searchText: string) => void;
  initialSearchText: string;
};

function SearchBar({ onSearch, initialSearchText }: SearchBarProps) {
  const [searchText, setSearchText] = useState(initialSearchText);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setSearchText(text);
    if (!text) onSearch('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchText);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <label className="search-bar__label" htmlFor="search-product">
        <SearchIcon />
      </label>
      <input
        type="search"
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
