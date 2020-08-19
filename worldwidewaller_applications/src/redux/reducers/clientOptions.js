import { SET_CLIENT_OPTIONS } from "../actionTypes";
//import {THEMES, DEFAULT_THEME} from '../../utilities/themes/themes';

const initialState = {
  selectedTheme: null,  
}

const setClientOptions = (state = initialState, action) => {  
  switch (action.type) {
    case SET_CLIENT_OPTIONS: {
      console.log(action.payload.selectedTheme);
      return {
        ...state,
        selectedTheme: action.payload.selectedTheme,
      }
    }
    default: {
      return state;
    }
  }
};

export default setClientOptions;