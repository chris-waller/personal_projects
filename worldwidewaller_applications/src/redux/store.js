/************* **/
/* Redux store */
/***************/

//npm imports
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from "redux-logger";

// reducers
import setTheme from './reducers/clientSettings';
const rootReducer =  combineReducers({
  setTheme,
});

// create the store with devtools and logging
export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger)
  )
);