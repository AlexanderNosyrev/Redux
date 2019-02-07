import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Alert } from 'reactstrap';

const ErrorField = (props) => {
	const {error} = props;
	return (
		<Alert color="danger" style={{margin: 5}}>
			{error}
		</Alert>
	);
}

const mapStateToProps = store => {
	return{
		error: store.registration.error,
	}
}

export default connect(mapStateToProps)(ErrorField);

