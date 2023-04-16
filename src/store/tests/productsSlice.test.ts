import { productsReducer, productsActions } from '../productsSclice';

describe('productsSlice', () => {
  it('should return initial state', () => {
    const result = productsReducer(undefined, { type: '' });
    expect(result.searchQuery).toEqual('');
  });

  it('should save search query in the state', () => {
    const action = { type: productsActions.saveSearchQuery, payload: 'Search' };
    const result = productsReducer({ searchQuery: '' }, action);
    expect(result.searchQuery).toBe('Search');
  });
});
