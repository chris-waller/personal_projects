// ////////////////////////////////////// //
// Reducer file for updating app settings //
// ////////////////////////////////////// //

// helper files
import {
  SET_SPLASH_VIS,
} from '../actionTypes';

// initial state
const initialState = {
  splashPageVisibility: {
    welcome: true, // displayed when a user visits the site for the first time
    resume: true, // displayed when a user visits the resume page for the first time
    setting: true, // displayed when a user visits the settings page for the first time
  },
};

const appSettings = (state = initialState, action) => {
  switch (action.type) {
    // Sets the theme for the application
    case SET_SPLASH_VIS: {
      return {
        ...state,
        selectedTheme: action.payload.theme,
      };
    }

    default: {
      return state;
    }
  }
};

export default appSettings;
