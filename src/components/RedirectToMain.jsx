import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';
import Profile from './Profile.jsx';

const RedirectToMain = () => {
	const isAuthorised = this.props.isAuthorised;
	return (
		<Route
			render={props =>
				isAuthorised ? (
					<Profile {...props} />
				) : (
					<Redirect to="/" />
				)
			}
		/>
	)
}

const mapStateToProps = (store) => {
	// console.log(store);
	return{
		isAuthorised: store.isAuthorised
	}
}

export default connect(mapStateToProps)(RedirectToMain);
