import { CAT_CHOSEN } from './actions';

/**
 * nextTextReducer
 * Returns the text for the Next Question button
 */
export const catTextReducer = (state = '', action) => {
  if (action.type === CAT_CHOSEN) {
    if (action.payload === 'sports') {
      return 'SPORTS';
    }
    if (action.payload === 'entertainment') {
      return 'TV & MOVIES';
    }
    if (action.payload === 'music') {
      return 'MUSIC';
    }
    if (action.payload === 'geography') {
      return 'GEOGRAPHY';
    }
    if (action.payload === 'history') {
      return 'HISTORY';
    }
  }
  return state;
};
