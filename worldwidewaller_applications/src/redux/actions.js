/*********************/
/* Redux action file */
/*********************/
import { SET_THEME } from "./actionTypes";

/**
 * Sets the application theme.
 */
export const setTheme = selectedTheme => ({
  type: SET_THEME,
  payload: { selectedTheme }
});