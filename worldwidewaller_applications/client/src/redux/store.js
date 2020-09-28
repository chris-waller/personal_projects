/* *********** */
/* Redux store */
/* *********** */

// npm imports
import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

// reducer import
import userSettings from './reducers/userSettings';
import appSettings from './reducers/appSettings';
import configSettings from './reducers/configSettings';

// add all reducers here
const rootReducer = combineReducers({
  configSettings, userSettings, appSettings,
});

// create the store with devtools and logging
export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger),
  ),
);
