import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {SET_INPUT_TEXT} from '../actions/InputActions';

class DataInput extends Component {
	onBtnClick = (e) => {
		const input = document.querySelector('input');
		const listContainer = document.querySelector('.listContainer');
		const newLi = document.createElement('li');
		let nameVal = input.value.trim();

		(nameVal.length > 0) ? nameVal = (nameVal[0].toUpperCase() + nameVal.slice(1)) : nameVal = '-';
		this.props.setInputText(nameVal);
		newLi.innerHTML = nameVal;
		listContainer.appendChild(newLi);
		input.value = '';
	}
	render() {
		return (
			<div>
				<span>Введите какой-нибудь текст</span>
				<input type='text' placeholder='Текст'></input>
				<button onClick={this.onBtnClick}>Подтвердить</button>
			</div>
		);
	}
}

export {DataInput};
