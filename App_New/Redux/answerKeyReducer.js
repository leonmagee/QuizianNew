import {
  NEXT_QUESTION,
  START_NEW_QUIZ,
  ANSWER_KEY,
  START_QUIZ,
  QUIZ_RESET,
} from './actions';

/**
 * answerKeyReducer
 * Returns the key of the chosen answer
 * This is set when a new question is loaded with the correct key,
 * and it is reset to null when the quiz is restarted, reset, or moved to the next question.
 */
export const answerKeyReducer = (state = null, action) => {
  switch (action.type) {
    case ANSWER_KEY:
      return action.payload;
    case NEXT_QUESTION:
      return null;
    case START_NEW_QUIZ:
      return null;
    case QUIZ_RESET:
      return null;
    case START_QUIZ:
      return null;
    default:
      return state;
  }
};
