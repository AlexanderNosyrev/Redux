import React from 'react';
import PropTypes from 'prop-types';

Books.propTypes = {
	index: PropTypes.number.isRequired,
	removeBook: PropTypes.func.isRequired,
	author: PropTypes.string.isRequired,
	book: PropTypes.string.isRequired,
};

function Books(props){
	const { index, author, book, removeBook } = props;
	return(
		<div>
			<ul className="books-list">
				<li>
					<h4>{author}</h4>
					<p>{book}</p>
					<a href="#" className="boxclose" onClick={() => {removeBook(index)}}>Удалить запись</a>{/*Подобная запись для onClick вляется стандартоной*/}
				</li>
			</ul>
		</div>
	)
}

export default Books;
