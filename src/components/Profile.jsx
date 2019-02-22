import React, { Component } from 'react';
import {connect} from 'react-redux';

function Profile(props) {
	const {user} = props;
	return (
		<h3>Hello, {user.login}!
	Welcome to your page!</h3>
	);
}

const mapStateToProps = (store) => {
	// console.log(store);
	return{
		user: store.user
	}
}

export default connect(mapStateToProps)(Profile)