export const SET_INPUT_TEXT = 'SET_INPUT_TEXT';
export const SET_VISIBILITY = 'SET_VISIBILITY';
export const ADD_TEXT_FIELD = 'ADD_TEXT_FIELD';

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

let nextId = 0;
export function addTextField(text) {
	return {
		type: ADD_TEXT_FIELD,
		payload: text,
		id: nextId++,
		visible: true
	}
}
