import React, { Component } from 'react';
import injectSheet from 'react-jss';
import {checkConditions} from './Users.js'

class Login extends Component {

	constructor(props){
		super(props);
		this.state = {login: '', password: ''}
		this.onLoginChange = this.onLoginChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
	}

	onLoginChange(e){
		this.setState({login: e.target.value})
	}

	onPasswordChange(e){
		this.setState({password: e.target.value})
	}

	handleSunbmit = (event) => {
		if (checkConditions(this.state)){
			this.props.logIn(this.state);
		} else {
			this.props.logFailure();
		}
		event.preventDefault();
	}

	render() {
		const classes = this.props
		console.log(this.props)
		return (
			<form onSubmit={this.handleSunbmit}>
				<div>
					<label>Login</label>
					<input
						className={classes.myInput}
						value={this.state.login}
						onChange={this.onLoginChange}
						name='login'
						type='text'
						placeholder='Введите логин'
					/>
				</div>
				<div>
					<label>Password</label>
					<input
						className={classes.myInput}
						value={this.state.password}
						onChange={this.onPasswordChange}
						name='password'
						type='text'
						placeholder='Введите пароль'
					/>
				</div>
				<button className={classes.myButton} type="submit">
					Submit
				</button>
			</form>
		);
	}
}

const styles = {
	myButton: {
		fontSize: 13.5,
		fontStyle: 'italic',
		margin: 5,
	},
	myInput: {
		borderRadius: 4,
		margin: 5,
		height: 20,
		borderColor: 'black'
	}
};

export default injectSheet(styles)(Login);