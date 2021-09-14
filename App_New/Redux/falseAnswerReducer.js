import {
  START_QUIZ,
  START_NEW_QUIZ,
  INCORRECT_ANSWER,
  TIMER_EXPIRES,
} from './actions';

/**
 * falseAnswerReducer
 * Returns the number of incorrect chosen answers
 * Set to 0 when quiz is reset or a new quiz is started
 */
export const falseAnswerReducer = (state = 0, action) => {
  switch (action.type) {
    case INCORRECT_ANSWER:
      return state + 1;
    case TIMER_EXPIRES:
      return state + 1;
    case START_QUIZ:
      return 0;
    case START_NEW_QUIZ:
      return 0;
    default:
      return state;
  }
};
