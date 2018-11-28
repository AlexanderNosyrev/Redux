import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Input from './Input';

class DataInput extends Component {
	onBtnClick = (e) => {
		const input = document.querySelector('input');
		let nameVal = input.value.trim();

		(nameVal.length > 0) ? nameVal = (nameVal[0].toUpperCase() + nameVal.slice(1)) : nameVal = '-';
		this.props.setInputText(nameVal);
		this.props.setVisibility(true);
		input.value = '';
	}
	render() {
		return (
			<div>
				<span>Введите какой-нибудь текст</span>
				<Input/>
				<button onClick={this.onBtnClick}>Подтвердить</button>
			</div>
		);
	}
}

const mapStateToProps = store => {
	return{
		input: store.input,
		list: store.list
	}
}

export default connect(mapStateToProps)(DataInput);
