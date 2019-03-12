const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'
const CHECKBOX_CHECK = 'CHECKBOX_CHECK'

const initialState = {
	isAuthorised: false,
	isCheckBoxChecked: false,
	error: null,
	productName: 'Двойная защита'
}

export const checkboxCheck = (state) => ({
	type: CHECKBOX_CHECK,
	payload: state
})

export const logIn = (user) => ({
	type: LOG_IN,
	payload: user
})

export const logOut = (state) => ({
	type: LOG_OUT,
	payload: state
})

export default function rootReducer(state = initialState, action = {}) {
	switch (action.type) {
	case CHECKBOX_CHECK: 
		return {
			...state,
			isCheckBoxChecked: !state.isCheckBoxChecked
		}
	case LOG_IN:
		return {
			...state,
			isAuthorised: true,
			error: null
		}
	case LOG_OUT:
		return {
			...state,
			isAuthorised: false,
			error: null
		}
	default:
		return state
	}
}
