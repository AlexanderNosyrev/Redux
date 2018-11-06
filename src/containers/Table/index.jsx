import React from 'react';
import Books from '../Books';

class BooksTable extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			author: '',
			book: '',
			books: [],
		};
	}

	authorChange = (e) => {
		const value = e.target.value;
		this.setState({ author: value })
	}

	bookChange = (e) => {
		const value = e.target.value;
		this.setState({ book: value })
	}

	addBook = () => {
		const { author, book, books } = this.state;
		const newBook = {
			author,
			book,
		};
		const booksUpdated = books;

		if(newBook.author!=="" && newBook.book!==""){
			booksUpdated.push(newBook);
		}
		this.setState({ 
			books: booksUpdated,
			author: '',
			book:''
		});

		for(var i = 0; i < books.length-1; i++){
			if(newBook.author === books[i].author && newBook.book === books[i].book){
				booksUpdated.pop();
				this.setState({ 
					books: booksUpdated,
					author: '',
					book:''
				});
				console.log('ERROR!');
				break;
			}
		}
	}

	removeBook = (index) => {
		const books = this.state.books;
		const booksUpdated = books.filter((book, i) => (i!==index));
		this.setState({ books: booksUpdated });
	};

	render(){
		const { author, book, books } = this.state;
		return(
			<div>
				<div id='Input-field'>
					<input
						className="margined"
						placeholder="Автор"
						value={author}
						onChange={this.authorChange}
					/>
					<br/>
					<input
						className="margined"
						placeholder="Книга"
						value={book}
						onChange={this.bookChange}
					/>
					<br/>
					<input className="margined" type="submit" value="Добавить" onClick={this.addBook}></input>
				</div>
				<div id="menu">
					{books.map((book, i) => (
						<Books key={i} index={i} author={book.author} book={book.book} removeBook={this.removeBook}/>
					))}
				</div>
			</div>
		);
	}
}

export default BooksTable;