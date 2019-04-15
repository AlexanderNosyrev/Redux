import {combineReducers} from 'redux';
import {somebody} from '../utils'

const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
const PHOTOS_LOADED = 'PHOTOS_LOADED';
const GET_USER = 'GET_USER';

const pageInitialState = {
	year: 2018,
	isLoaded: false,
	photos: [],
	loadText: ''
}

const userInitialState = {
	user: null,
}

export function loadPhotos(year) {
	return (dispatch) => {
		dispatch({
			type: GET_PHOTOS_REQUEST,
			payload: year,
		})
		dispatch({
			type: GET_USER,
			payload: somebody,
		})
		setTimeout(() => {
			dispatch({
				type: PHOTOS_LOADED,
				payload: [1, 2, 3, 4, 5],
			})
		}, 1000)
	}
}

export function userReducer(state = userInitialState, action) {
	switch (action.type){
		case 'GET_USER':
			return {...state, user: action.payload}
		default:
			return state
	}
}
export function pageReducer(state = pageInitialState, action) {
	switch (action.type){
		case 'GET_PHOTOS_REQUEST': 
			return {...state, isLoaded: false, year: action.payload, loadText: 'Загрузка...'}
		case 'PHOTOS_LOADED':
			return {...state, isLoaded: true, photos: action.payload, loadText: ''}
		default:
			return state
	}
}

export const rootReducer = combineReducers({
	page: pageReducer,
	user: userReducer
})