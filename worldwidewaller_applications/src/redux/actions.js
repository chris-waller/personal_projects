import { SET_CLIENT_OPTIONS } from "./actionTypes";

export const setClientOptions = selectedTheme => ({
  type: SET_CLIENT_OPTIONS,
  payload: { selectedTheme }
});