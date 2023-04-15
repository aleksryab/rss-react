import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormInfo } from '../types';

type FormCardsState = {
  cards: IFormInfo[];
};

const initialState: FormCardsState = {
  cards: [],
};

const formCardsSlice = createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    addFormCard(state, action: PayloadAction<IFormInfo>) {
      state.cards.push(action.payload);
    },
  },
});

export const formCardsActions = formCardsSlice.actions;
export const formCardsReducer = formCardsSlice.reducer;
