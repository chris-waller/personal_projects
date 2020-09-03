/* ****************** */
/* Redux action file  */
/* ****************** */
import {
  SET_THEME,
  TOGGLE_HEADER_COLLAPSED,
  TOGGLE_RESUME_SECTIONS,
  SET_RESUME_SEARCH_STRING,
} from './actionTypes';

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

/**
 * Toggles the Resume page sections open/closed
 */
export const toggleResumeSections = (sections) => ({
  type: TOGGLE_RESUME_SECTIONS,
  payload: { sections },
});

/**
 * Sets the search string used on the resume page
 */
export const setResumeSearchString = (resumeSearchString) => ({
  type: SET_RESUME_SEARCH_STRING,
  payload: { resumeSearchString },
});
