// Reducer file for updating user settings
import {
  SET_CONFIG_SETTINGS,
} from '../actionTypes';

// initial state
const initialState = {
  appConfigSettings: {},
};

const configSettings = (state = initialState, action) => {
  switch (action.type) {
    // Sets the theme for the application
    case SET_CONFIG_SETTINGS: {
      return {
        ...state,
        appConfigSettings: {
          ...action.payload.configSettings,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default configSettings;
