import {ADD_TEXT_FIELD} from '../actions/InputActions';


export function elemReducer(state = [], action){
	switch(action.type){
		case ADD_TEXT_FIELD:
		return [...state, {elem: action.payload, id: action.id, visible: action.visible} ]

	default:
		return state
	}
}