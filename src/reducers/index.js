import { combineReducers } from 'redux';
import { listReducer } from './list';
import { inputReducer } from './input';

export const rootReducer = combineReducers({
	list: listReducer,
	input: inputReducer,
})