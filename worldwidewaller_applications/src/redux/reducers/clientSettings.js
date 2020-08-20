/* ***************************************** */
/* Reducer file for updating client settings */
/* ***************************************** */

// helper files
import { SET_THEME } from '../actionTypes';

// initial state
const initialState = {
  headerCollapsed: false,
  selectedTheme: null,
};

/**
 * Sets the theme for the application.
 */
const setTheme = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME: {
      return {
        ...state,
        selectedTheme: action.payload.selectedTheme,
      };
    }
    default: {
      return state;
    }
  }
};
export default setTheme;
