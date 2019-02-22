import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import {logFailure, logIn} from '../ducks'
import Login from '../components/Login'

class LoginContainer extends Component {

	render() {
		const {
			error,
			isAuthorised,
			logFailure,
			logIn,
			onLoginChange,
			onPasswordChange
		} = this.props;
		console.log(this.props)
		return (
			<div>
				<Login
				error = {error}
				isAuthorised = {isAuthorised}
				logFailure = {logFailure}
				logIn = {logIn}
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
		error: store.error,
		isAuthorised: store.isAuthorised
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		logFailure: (error) => dispatch(logFailure(error)),
		logIn: (user) => dispatch(logIn(user))
	}
}

Login.propTypes = {
	isAuthorised: PropTypes.bool.isRequired,
	error: PropTypes.string,
	logFailure: PropTypes.func,
	logIn: PropTypes.func,
	onLoginChange: PropTypes.func,
	onPasswordChange: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);