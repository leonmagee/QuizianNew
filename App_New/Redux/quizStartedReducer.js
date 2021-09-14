import { START_QUIZ, QUIZ_RESET } from './actions';

/**
 * quizStartedReducer
 * toggles quiz being started
 */
export const quizStartedReducer = (state = false, action) => {
  switch (action.type) {
    case START_QUIZ:
      return true;
    case QUIZ_RESET:
      return false;
    default:
      return state;
  }
};
