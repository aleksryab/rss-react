import { formCardsReducer, formCardsActions } from '../formCardsSlice';
import { formCardData } from '../../mocks/data';

describe('formCardsSlice', () => {
  it('should return initial state', () => {
    const result = formCardsReducer(undefined, { type: '' });
    expect(result).toEqual([]);
  });

  it('should add new form card in the state', () => {
    const action = { type: formCardsActions.addFormCard.type, payload: formCardData };
    const result = formCardsReducer([], action);
    expect(result[0].firstName).toBe('John');
  });
});
