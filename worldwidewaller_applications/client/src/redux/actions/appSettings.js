// redux actions for all user settings (will eventually be stored in the db)
import {
  TOGGLE_HEADER_COLLAPSED,
  TOGGLE_RESUME_SECTIONS,
  SET_RESUME_SEARCH_STRING,
} from '../actionTypes';

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
