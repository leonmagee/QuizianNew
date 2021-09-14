import { CAT_CHOSEN, NEW_CAT, START_NEW_QUIZ, START_QUIZ } from './actions';

/**
 * chooseCatReducer
 * toggles the choose cat page
 */
export const chooseCatReducer = (state = true, action) => {
  switch (action.type) {
    case CAT_CHOSEN:
      return false;
    case NEW_CAT:
      return true;
    case START_NEW_QUIZ:
      return true;
    case START_QUIZ:
      return true;
    default:
      return state;
  }
};
