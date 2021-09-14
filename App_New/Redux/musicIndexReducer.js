import { MUSIC_QUESTION } from './actions';

/**
 * musicIndexReducer
 * track the available questions for the Music category
 * the initial state is set in QuizWrap
 */
export const musicIndexReducer = (state = null, action) => {
  switch (action.type) {
    case MUSIC_QUESTION:
      return action.payload;
    default:
      return state;
  }
};
