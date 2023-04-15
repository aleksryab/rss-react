import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ProductsState = {
  searchQuery: string;
};

const initialState: ProductsState = {
  searchQuery: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    saveSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
