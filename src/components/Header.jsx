import React from 'react';

function Header(props) {
	return (
		<div>
			Следующий ход: <span>{(props.xIsNext ? 'X' : 'O')}</span>
		</div>
	)
}

export {Header}