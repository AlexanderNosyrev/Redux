export const users = [
	{login: 'Vasya', password: '123456'},
	{login: 'Petya', password: '123456'},
	{login: 'Borya', password: '123456'},
	{login: 'Sasha', password: '123456'},
	{login: 'Zhenia', password: '123456'},
]
export let arrLogins = [];
export let arrPasswords = [];
for( let i = 0; i < users.length; i++ ){
	arrLogins.push(users[i].login);
	arrPasswords.push(users[i].password);
}