const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'
const LOG_FAILURE = 'LOG_FAILURE'

const initialState = {
	isAuthorised: false,
	user: '',
	error: null,
	productName: 'Двойная защита'
}

export const logIn = (user) => ({
	type: LOG_IN,
	payload: user
})

export const logOut = (state) => ({
	type: LOG_OUT,
	payload: state
})

export const logFailure = (error) => ({
	type: LOG_FAILURE,
	payload: error
})

export default function rootReducer(state = initialState, action = {}) {
	switch (action.type) {
	case LOG_IN:
		return {
			...state,
			user: action.payload,
			isAuthorised: true,
			error: null
		}
		case LOG_OUT:
		return {
			...state,
			user: null,
			isAuthorised: false,
			error: null
		}
		case LOG_FAILURE:
		return {
			...state,
			user: null,
			isAuthorised: false,
			error: 'Имя пользователя или пароль введены не верно'
		}
	default:
		return state
	}
}
