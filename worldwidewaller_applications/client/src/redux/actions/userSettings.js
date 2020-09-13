// redux actions for all user settings (will eventually be stored in the db)
import {
  SET_THEME,
  SET_SPLASH_VIS,
} from '../actionTypes';

/**
 * Sets the application theme.
 */
export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: { theme },
});

export const setSplashPageVisibility = (resumeSplashPages) => (
  {
    type: SET_SPLASH_VIS,
    payload: { resumeSplashPages },
  }
);
