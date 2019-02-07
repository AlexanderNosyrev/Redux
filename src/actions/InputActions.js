export const SET_INPUT_TEXT = 'SET_INPUT_TEXT';
export const SET_VISIBILITY = 'SET_VISIBILITY';
export const ADD_TEXT_FIELD = 'ADD_TEXT_FIELD';
export const REGISTRATION_SUCCEDED = 'REGISTRATION_SUCCEDED';
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED';
export const REGISTRATION_IN_PROCESS = 'REGISTRATION_IN_PROCESS';

export function setInputText(text) {
	return {
		type: SET_INPUT_TEXT,
		payload: text,
	}
}

export function setVisibility(filter) {
	return {
		type: SET_VISIBILITY,
		payload: filter,
	}
}

export function registrationSucceded (user){
	return {
		type: REGISTRATION_SUCCEDED,
		payload: user
	}
}

export function registrationFailed (error){
	return {
		type: REGISTRATION_FAILED,
		payload: error
	}
}

export function registrationInProcess (data){
	return {
		type: REGISTRATION_IN_PROCESS,
		payload: data
	}
}

let nextId = 0;
export function addTextField(text) {
	return {
		type: ADD_TEXT_FIELD,
		payload: text,
		id: nextId++,
		visible: true
	}
}
