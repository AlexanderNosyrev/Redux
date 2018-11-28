import {SET_VISIBILITY} from '../actions/InputActions';

export const initialState = {
	visible: false,
}

export function listReducer(state = initialState, action){
	switch(action.type){
		case SET_VISIBILITY:
		return{...state, visible: action.payload}

	default:
		return state
	}
}