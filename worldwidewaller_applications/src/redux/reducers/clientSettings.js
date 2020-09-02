/* ***************************************** */
/* Reducer file for updating client settings */
/* ***************************************** */

// helper files
import {
  SET_THEME,
  TOGGLE_HEADER_COLLAPSED,
  TOGGLE_RESUME_SECTIONS,
} from '../actionTypes';

// initial state
const initialState = {
  headerCollapsed: false,
  resumeSections: {
    achievementsOpen: false,
    educationOpen: false,
    experienceOpen: false,
    hobbiesOpen: false,
    linksOpen: false,
    managementOpen: false,
    summaryOpen: false,
    technicalOpen: false,
  },
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

    // Toggles the main header open/closed for the application
    case TOGGLE_RESUME_SECTIONS: {
      return {
        ...state,
        resumeSections: action.payload.sections,
      };
    }

    default: {
      return state;
    }
  }
};

export default updateClientSettings;
