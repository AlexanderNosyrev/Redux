export const SET_INPUT_TEXT = 'SET_INPUT_TEXT';
export const SET_VISIBILITY = 'SET_VISIBILITY';

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