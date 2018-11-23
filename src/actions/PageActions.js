export const SET_USER = 'SET_USER';
export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';

export function getPhotos(year) {
	return dispatch => {
		dispatch({
			type: GET_PHOTOS_REQUEST,
			payload: year,
		})
		setTimeout(() => {
			dispatch({
				type: GET_PHOTOS_SUCCESS,
				payload: [1, 2, 3, 4, 5],
			})
		}, 1000)
	}
}

export function setName(user){
	return{
		type: SET_USER,
		payload: user,
	}
}