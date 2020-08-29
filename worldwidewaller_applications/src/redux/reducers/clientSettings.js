/* ***************************************** */
/* Reducer file for updating client settings */
/* ***************************************** */

// helper files
import { SET_THEME, TOGGLE_HEADER_COLLAPSED } from '../actionTypes';

// initial state
const initialState = {
  headerCollapsed: false,
  selectedTheme: null,
};

const updateClientSettings = (state = initialState, action) => {
  switch (action.type) {
    // Sets the theme for the application
    case SET_THEME: {
      return {
        ...state,
        selectedTheme: action.payload.theme,
      };
    }
    // Toggles the main header open/closed for the application
    case TOGGLE_HEADER_COLLAPSED: {
      return {
        ...state,
        headerCollapsed: action.payload.isCollapsed,
      };
    }
    default: {
      return state;
    }
  }
};

export default updateClientSettings;
