import { HISTORY_QUESTION } from './actions';

/**
 * historyIndexReducer
 * track the available questions for the History category
 * the initial state is set in QuizWrap
 */
export const historyIndexReducer = (state = null, action) => {
  switch (action.type) {
    case HISTORY_QUESTION:
      return action.payload;
    default:
      return state;
  }
};
