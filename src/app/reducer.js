import { createHistory } from 'history';
import {
  routerStateReducer,
  reduxReactRouter
} from 'redux-router';
import thunk from 'redux-thunk';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { devTools, persistState } from 'redux-devtools';

import apiMiddleware from 'redux/middleware/api';

import powerRanger from 'powerRanger/reducer';

let middleware = [thunk, apiMiddleware];

const reducer = combineReducers({
  router: routerStateReducer,
  powerRanger,
  form: formReducer
});

export const store = compose(
  applyMiddleware(...middleware),
  reduxReactRouter({ createHistory }),
  devTools(),
)(createStore)(reducer);
