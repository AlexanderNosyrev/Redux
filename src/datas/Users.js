export const Users = [
	{login: 'alex', password: '12345'},
	{login: 'apex', password: '54321'},
	{login: 'olex', password: '123456'},
	{login: 'opex', password: '654321'},
]

export function checkConditions (params) {
	let counter = 0;
	console.log(params);
	for(let i = 0; i < Users.length; i++){
		if (params.login === Users[i].login && params.password === Users[i].password){
			counter = counter + 1;
		}
	}
	return counter;
}