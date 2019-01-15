import React, { Component } from 'react';
import {Fields} from './Fields.jsx';
import {Field} from './Field.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'

const styles = {
	boxSizing: 'content-box'
}

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true
		};
	}
	onClick = (i) => {
		const squares = this.state.squares.slice();
		if ( squares[i]) {
			return;
		}
		let xIsNext = this.state.xIsNext;
		if(xIsNext === true) {
			squares[i] = 'X';
			xIsNext = false;
		} else {
			squares[i] = 'O';
			xIsNext = true;
		}
		this.setState({
			squares: squares,
			xIsNext: xIsNext
		});
		console.log(this.state.squares)
	}
	onNewGameClick = () => {
		this.setState ({
			squares: Array(9).fill(null),
			xIsNext: true
		});
	}
	render() {
		const winner = calculateWinner(this.state.squares);
		let status;
		if(winner){
			status = 'Победитель: ' + winner;
		} else {
			status = 'Следующий ход: ' + (this.state.xIsNext ? 'X' : 'O');
		}
		return (
			<div>
				<p>{status}</p>
				<Fields style={styles}
					squares ={this.state.squares}
					status = {this.state.status}
					xIsNext = {this.state.xIsNext}
					onClick ={this.onClick}
				/>
				<button className='btn btn-primary' onClick={this.onNewGameClick}>Новая игра</button>
			</div>
		);
	}
}

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			console.log(lines[i])
			return squares[a];
		}
	}
	return null;
}

export {Game}