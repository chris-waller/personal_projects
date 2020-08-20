/* *********** */
/* Redux store */
/* *********** */

// npm imports
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

// reducer import
import updateClientSettings from './reducers/clientSettings';

// add all reducers here
const rootReducer = combineReducers({
  updateClientSettings,
});

// create the store with devtools and logging
export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger),
  ),
);
