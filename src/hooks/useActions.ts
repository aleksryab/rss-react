import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { formCardsActions } from '../store/formCardsSlice';

const actions = {
  ...formCardsActions,
};

const useActions = () => bindActionCreators(actions, useDispatch());

export default useActions;
