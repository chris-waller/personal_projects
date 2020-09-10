// Reducer file for updating user settings
import {
  SET_THEME,
  SET_SPLASH_VIS,
} from '../actionTypes';

// initial state
const initialState = {
  splashPageVisibility: {
    hideAll: false, // flag to not show any splash pages
    showWelcome: true, // displayed when a user visits the site for the first time
    showResume: true, // displayed when a user visits the resume page for the first time
    showSettings: true, // displayed when a user visits the settings page for the first time
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
        splashPageVisibility: {
          ...action.payload.resumeSplashPages,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default appSettings;
