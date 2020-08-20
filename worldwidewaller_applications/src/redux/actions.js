/* ****************** */
/* Redux action file  */
/* ****************** */
import { SET_THEME, TOGGLE_HEADER_COLLAPSED } from './actionTypes';

/**
 * Sets the application theme.
 */
export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: { theme },
});

/**
 * Toggles the main site header open/closed.
 */
export const toggleHeader = (isCollapsed) => ({
  type: TOGGLE_HEADER_COLLAPSED,
  payload: { isCollapsed },
});
