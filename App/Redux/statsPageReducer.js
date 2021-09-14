import { STATS_PAGE } from './actions';

/**
 * statsPageReducer
 * toggles stats page
 */
export const statsPageReducer = (state, action) => {
  switch (action.type) {
    case STATS_PAGE:
      return true;
    default:
      return false;
  }
};
