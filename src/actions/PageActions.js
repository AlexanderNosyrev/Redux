export const SET_YEAR = 'SET_YEAR';
export const SET_USER = 'SET_USER';

export function setYear(year) {
	return {
		type: SET_YEAR,
		payload: year,
	}
}

export function setName(user){
	return{
		type: SET_USER,
		payload: user,
	}
}