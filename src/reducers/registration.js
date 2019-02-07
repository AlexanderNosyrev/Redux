import {REGISTRATION_SUCCEDED, REGISTRATION_FAILED, REGISTRATION_IN_PROCESS} from '../actions/InputActions';

export const initialState = {
	isAuthorized: false,
	user: {},
	error: ''
}

export function registrationReducer(state = initialState, action){
	switch(action.type){
		case REGISTRATION_IN_PROCESS:
			return {...state, user: action.payload, isAuthorized: action.payload}
		break
		case REGISTRATION_SUCCEDED:
			return {...state, isAuthorized: true, user: action.payload, error: ''}
		break;
		case REGISTRATION_FAILED:
			return {...state, error: `Пользователя с логином ${(action.payload) ? action.payload : '...'} нельзя добавить в список.`, user: {}}
		break;
	default:
		return state
	}
}