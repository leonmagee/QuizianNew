import { CREDITS_PAGE } from './actions';

/**
 * statsPageReducer
 * toggles stats page
 */
export const creditsPageReducer = (state, action) => {
  switch (action.type) {
    case CREDITS_PAGE:
      return true;
    default:
      return false;
  }
};
