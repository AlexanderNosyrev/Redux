import { SET_USER, GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from '../actions/PageActions'

export const initialState = {
	year: '2018',
	photos: [],
	isFetching: false
}

export function pageReducer(state = initialState, action){
	switch(action.type){
		case SET_USER:
			return{...state, name: action.payload};

		case GET_PHOTOS_REQUEST:
			return { ...state, year: action.payload, isFetching: true };

		case GET_PHOTOS_SUCCESS:
			return { ...state, photos: action.payload, isFetching: false };

	default:
		return state
	}
}