/* *********** */
/* Redux store */
/* *********** */

// npm imports
// import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';

// reducer import
import clientSettings from './reducers/clientSettings';

// add all reducers here
const rootReducer = combineReducers({
  clientSettings,
});

// create the store with devtools and logging
export default createStore(
  rootReducer,
  composeWithDevTools(
    // applyMiddleware(logger),
  ),
);
