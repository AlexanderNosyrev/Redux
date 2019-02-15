import { createStore, applyMiddleware } from 'redux';
import {rootReducer} from '../ducks';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));