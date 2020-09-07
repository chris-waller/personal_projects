// Reducer file for updating app settings
import {
  SET_SPLASH_VIS,
  SET_THEME,
} from '../actionTypes';

// initial state
const initialState = {
  splashPageVisibility: {
    welcome: true, // displayed when a user visits the site for the first time
    resume: true, // displayed when a user visits the resume page for the first time
    setting: true, // displayed when a user visits the settings page for the first time
  },
  selectedTheme: null,
};

const appSettings = (state = initialState, action) => {
  switch (action.type) {
    // Sets the theme for the application
    case SET_THEME: {
      return {
        ...state,
        selectedTheme: action.payload.theme,
      };
    }

    // Sets visibility for the various splash pages throughout the site
    case SET_SPLASH_VIS: {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};

export default appSettings;
