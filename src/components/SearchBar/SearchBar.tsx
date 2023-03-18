import { Component } from 'react';

import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import './SearchBar.scss';

const SEARCH_TEXT_KEY = 'search-text';

type SearchBarProps = Record<string, never>;

type SearchBarState = {
  inputText: string;
};

export class SearchBar extends Component<SearchBarProps, SearchBarState> {
  state = {
    inputText: localStorage.getItem(SEARCH_TEXT_KEY) ?? '',
  };

  saveSearchTextToLocalStorage = () => {
    localStorage.setItem(SEARCH_TEXT_KEY, this.state.inputText);
  };

  componentDidMount() {
    window.addEventListener('beforeunload', this.saveSearchTextToLocalStorage);
  }

  componentWillUnmount() {
    this.saveSearchTextToLocalStorage();
    window.removeEventListener('beforeunload', this.saveSearchTextToLocalStorage);
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputText: e.target.value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  render() {
    const { inputText } = this.state;
    return (
      <form className="search-bar" onSubmit={this.handleSubmit}>
        <label className="search-bar__label" htmlFor="search-product">
          <SearchIcon />
        </label>
        <input
          placeholder="Search product"
          id="search-product"
          className="search-bar__input"
          value={inputText}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

export default SearchBar;
