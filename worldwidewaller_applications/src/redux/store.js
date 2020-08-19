//npm imports
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from "redux-logger";

// reducers
import setClientOptions from './reducers/clientOptions';
const rootReducer =  combineReducers({
  setClientOptions,
});


export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger)
  )
);
