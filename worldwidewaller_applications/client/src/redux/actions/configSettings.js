// redux actions for all user settings (will eventually be stored in the db)
import {
  SET_CONFIG_SETTINGS,
} from '../actionTypes';

/**
 * Sets the application theme.
 */
// eslint-disable-next-line
export const setConfigSettings = (configSettings) => ({
  type: SET_CONFIG_SETTINGS,
  payload: { configSettings },
});
