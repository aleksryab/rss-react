import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormInfo } from '../types';

const initialState: IFormInfo[] = [];

const formCardsSlice = createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    addFormCard(state, action: PayloadAction<IFormInfo>) {
      state.push(action.payload);
    },
  },
});

export const formCardsActions = formCardsSlice.actions;
export const formCardsReducer = formCardsSlice.reducer;
