import { combineReducers } from 'redux';
import { listReducer } from './list';
import { inputReducer } from './input';
import { elemReducer } from './elem';

export const rootReducer = combineReducers({
	list: listReducer,
	input: inputReducer,
	elem: elemReducer
})