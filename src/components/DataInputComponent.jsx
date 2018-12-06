import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class DataInputComponent extends Component {
	onClick = (e) => {
		let val = this.props.input.inputText;
		if (val !== undefined && val !== ''){
			this.props.addTextField(val);
			this.props.setVisibility(true);
		} else {
			e.preventDefault();
		}
	}
	onBlur = (e) => {
		let val = e.target.value;
		if (val){
			val = (val[0].toUpperCase() + val.slice(1));
			this.props.setInputText(e.target.value);
		} else {
			this.props.setInputText('');
		}
	}
	render() {
		return (
			<div>
				<label>Введите какой-нибудь текст
					<input onBlur={this.onBlur} type='text' placeholder='Текст'></input>
				</label>
				<button onClick={this.onClick}>Добавить</button>
			</div>
		);
	}
}

export default DataInputComponent;
