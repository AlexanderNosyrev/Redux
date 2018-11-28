export const SET_INPUT_TEXT = 'SET_INPUT_TEXT';

export function setInputText(text) {
	return {
		type: SET_INPUT_TEXT,
		payload: text,
	}
}