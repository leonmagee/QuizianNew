import { QUIZ_RESULTS, START_QUIZ, START_NEW_QUIZ } from './actions';

/**
 * quizResultsReducer
 * toggles displaying the quiz results component
 * used in QuizWrap.js
 */
export const quizResultsReducer = (state = false, action) => {
  switch (action.type) {
    case QUIZ_RESULTS:
      return true;
    case START_NEW_QUIZ:
      return false;
    case START_QUIZ:
      return false;
    default:
      return state;
  }
};
