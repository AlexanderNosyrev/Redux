import React from 'react';

const arrOfBooks = {
	books:[
		{
			id: 'Tolstoy',
			author: 'Л. Н. Толстой',
			books: 'Война и Мир, Анна Каренина'
		},
		{
			id: 'Dostaevsky',
			author: 'Ф. М. Достоевский',
			books: 'Преступление и наказание, Идиотъ, Бесы'
		},
		{
			id: 'Chekhov',
			author: 'А. П. Чехов',
			books: 'Три Сестры, Чайка, Дядя Ваня'
		}
	],
	all: function() {return this.books},
	get: function(id) {
		const isBook = p => p.id === id;
		return this.books.find(isBook)
	}
};

export default arrOfBooks;