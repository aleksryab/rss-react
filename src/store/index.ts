import { configureStore } from '@reduxjs/toolkit';
import formCardsReducer from './formCardsSlice';

const store = configureStore({
  reducer: {
    formCards: formCardsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
