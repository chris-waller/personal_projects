// redux actions for all user settings (will eventually be stored in the db)
import {
  SET_THEME,
} from '../actionTypes';

/**
 * Sets the application theme.
 */
export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: { theme },
});

export default setTheme;
