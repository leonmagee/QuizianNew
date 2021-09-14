import { SETTINGS_PAGE } from './actions';

/**
 * statsPageReducer
 * toggles settings page
 */
export const settingsPageReducer = (state, action) => {
  switch (action.type) {
    case SETTINGS_PAGE:
      return true;
    default:
      return false;
  }
};
