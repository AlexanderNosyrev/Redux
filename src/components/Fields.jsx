import React, { Component } from 'react';
import {Field} from './Field.jsx';

const styles = {
	height: 37,
}

class Fields extends React.Component {
	renderField(i) {
		return (
			<Field 
				value={this.props.squares[i]}
				onClick={() => this.props.onClick(i)}
			/>
		);
	}
	render() {
		return (
			<div id='gameField'>
				<div style={styles} className='fieldRow'>
					{this.renderField(0)}
					{this.renderField(1)}
					{this.renderField(2)}
				</div>
				<div style={styles} className='fieldRow'>
					{this.renderField(3)}
					{this.renderField(4)}
					{this.renderField(5)}
				</div>
				<div style={styles} className='fieldRow'>
					{this.renderField(6)}
					{this.renderField(7)}
					{this.renderField(8)}
				</div>
			</div>
		);
	}
}


export {Fields}