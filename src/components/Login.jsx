import React, { Component } from 'react';
import injectSheet from 'react-jss';
import {checkConditions} from './Users.js';
import PropTypes from 'prop-types';


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
		const {classes, error} = this.props;
		return (
			<div>
				<form className={classes.myForm} onSubmit={this.handleSunbmit}>
					<div className={classes.myField}>
						<label className={classes.myLabel}>Login</label>
						<input
							className={classes.myInput}
							value={this.state.login}
							onChange={this.onLoginChange}
							name='login'
							type='text'
							placeholder='Введите логин'
						/>
					</div>
					<div className={classes.myField}>
						<label className={classes.myLabel}>Password</label>
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
				<h3 className={classes.h3}>{error}</h3>
			</div>
		);
	}
}

Login.propTypes = {
	classes: PropTypes.objectOf(PropTypes.any).isRequired
};

const styles = {
	myForm: {
		float: 'left',
	},
	h3: {
		display: 'flex',
		width: '100%',
		color: 'red',
		margin: 5
	},
	myButton: {
		fontSize: 13.5,
		fontStyle: 'italic',
		marginTop: 5,
		padding:{
			top: 5, 
			right: 20,
			bottom: 5,
			left: 20
		}
	},
	myField: {
		display: 'flex',
	},
	myLabel: {
		margin: 'auto',
		marginLeft: '0'
	},
	myInput: {
		borderRadius: 4,
		margin: 5,
		height: 20,
		borderColor: 'black'
	}
};


export default injectSheet(styles)(Login);