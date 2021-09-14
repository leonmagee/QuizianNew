import { ENTERTAINMENT_QUESTION } from './actions';

/**
 * entertainmentIndexReducer
 * track the available questions for the Entertainment category
 * the initial state is set in QuizWrap
 */
export const entertainmentIndexReducer = (state = null, action) => {
  switch (action.type) {
    case ENTERTAINMENT_QUESTION:
      return action.payload;
    default:
      return state;
  }
};
