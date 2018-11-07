const ArrOfBooks = {
	books:[
		{
			id: 'Tolstoy',
			author: 'Л. Н. Толстой',
			books: 'Война и Мир, Анна Каренина',
			type: 'ours'
		},
		{
			id: 'Dostaevsky',
			author: 'Ф. М. Достоевский',
			books: 'Преступление и наказание, Идиотъ, Бесы',
			type: 'ours'
		},
		{
			id: 'Hemingway',
			author: 'Э. М. Хемингуэй',
			books: 'По ком звонит колокол',
			type: 'theirs'
		},
		{
			id: 'Chekhov',
			author: 'А. П. Чехов',
			books: 'Три Сестры, Чайка, Дядя Ваня',
			type: 'ours'
		},
		{
			id: 'Stivenson',
			author: 'Р.Л. Стивенсон',
			books: 'Остров Сокровищ',
			type: 'theirs'
		}
	],
	all: function() {return this.books},
	get: function(id) {
		const isBook = p => p.id === id;
		return this.books.find(isBook)
	}
};

export default ArrOfBooks;