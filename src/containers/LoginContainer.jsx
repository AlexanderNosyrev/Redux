import React, { Component } from 'react';
import { connect } from 'react-redux'
import {logFailure, logIn} from '../ducks'
import Login from '../components/Login'

class LoginContainer extends Component {

	render() {
		const {
			error,
			isAuthorised,
			logFailure,
			logIn,
			classes,
			onLoginChange,
			onPasswordChange
		} = this.props;

		return (
			<div>
				<Login
				error = {error}
				isAuthorised = {isAuthorised}
				logFailure = {logFailure}
				logIn = {logIn}
				classes= {classes}
				onLoginChange = {onLoginChange}
				onPasswordChange = {onPasswordChange}/>
			</div>
		);
	}
}

const mapStateToProps = (store) => {
	// console.log(store);
	return{
		user: store.user,
		error: store.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		logFailure: (error) => dispatch(logFailure(error)),
		logIn: (user) => dispatch(logIn(user))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);