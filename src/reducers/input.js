import {SET_INPUT_TEXT} from '../actions/InputActions';

export const initialState = {
	inputText: '',
}

export function inputReducer(state = initialState, action){
	switch(action.type){
		case SET_INPUT_TEXT:
		return{...state, inputText: action.payload}

	default:
		return state
	}
}