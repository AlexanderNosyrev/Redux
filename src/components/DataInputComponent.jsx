import React, { Component } from 'react';
import {users, arrLogins, arrPasswords} from '../components/users';
// import PropTypes from 'prop-types';

class DataInputComponent extends Component {
	onClick = (e) => {
		let val = this.props.input.inputText;
		console.log(val)
		let isLoginCorrect = arrLogins.indexOf(val);
		this.props.registrationInProcess();
		if (val !== undefined && val !== '' && isLoginCorrect != -1){
			this.props.addTextField(val);
			this.props.setVisibility(true);
			this.props.registrationSucceded(val);
		} else {
			this.props.registrationFailed(val);
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
				<form>
					<p><label>Введите ваш логин
						<input onBlur={this.onBlur} type='text' placeholder='логин'></input>
					</label></p>
					<p><label>Введите ваш пароль
						<input onBlur={this.onBlur} type='text' placeholder='пароль'></input>
					</label></p>
					<button onClick={this.onClick}>Добавить</button>
				</form>
			</div>
		);
	}
}

export default DataInputComponent;