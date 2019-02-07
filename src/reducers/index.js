import { combineReducers } from 'redux';
import { listReducer } from './list';
import { inputReducer } from './input';
import { elemReducer } from './elem';
import { registrationReducer } from './registration';

export const rootReducer = combineReducers({
	list: listReducer,
	input: inputReducer,
	registration: registrationReducer,
	elem: elemReducer
})