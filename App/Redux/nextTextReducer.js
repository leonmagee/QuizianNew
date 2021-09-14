import {
  FINAL_QUESTION,
  QUIZ_RESULTS,
  START_QUIZ,
  START_NEW_QUIZ,
} from './actions';

/**
 * nextTextReducer
 * Returns the text for the Next Question button
 */
export const nextTextReducer = (state = 'NEXT QUESTION', action) => {
  switch (action.type) {
    case FINAL_QUESTION:
      return 'RESULTS';
    case QUIZ_RESULTS:
      return 'NEXT QUESTION';
    case START_QUIZ:
      return 'NEXT QUESTION';
    case START_NEW_QUIZ:
      return 'NEXT QUESTION';
    default:
      return state;
  }
};
