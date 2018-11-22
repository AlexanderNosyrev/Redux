import {SET_USER} from '../actions/PageActions';
import {initialState} from './page';

export function userReducer(state = initialState, action){
	switch(action.type){
		case SET_USER:
			return{...state, name: action.payload};

	default:
		return state
	}
}