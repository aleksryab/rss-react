import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { formCardsActions } from '../store/formCardsSlice';
import { productsActions } from '../store/productsSclice';

const actions = {
  ...formCardsActions,
  ...productsActions,
};

const useActions = () => bindActionCreators(actions, useDispatch());

export default useActions;
