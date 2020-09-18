// Reducer file for updating app settings
import {
  TOGGLE_HEADER_COLLAPSED,
  TOGGLE_RESUME_SECTIONS,
  SET_RESUME_SEARCH_STRING,
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
  resumeSearchString: null,
};

const userSettings = (state = initialState, action) => {
  switch (action.type) {
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

    // Sets the search string used on the resume page
    case SET_RESUME_SEARCH_STRING: {
      return {
        ...state,
        resumeSearchString: action.payload.resumeSearchString,
      };
    }

    default: {
      return state;
    }
  }
};

export default userSettings;
