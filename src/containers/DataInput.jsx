import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ErrorField from '../components/ErrorField';
import {users, arrLogins, arrPasswords} from '../components/users';
import {
	setInputText,
	setVisibility,
	addTextField,
	registrationSucceded,
	registrationFailed,
	registrationInProcess
	}
from '../actions/InputActions';
import DataInputComponent from '../components/DataInputComponent';

class DataInput extends Component {

	render() {
		const {
			setInputText,
			setVisibility,
			addTextField,
			input,
			registrationSucceded,
			registrationFailed,
			registration,
			registrationInProcess
		} = this.props;

		return (
			<div>
				<DataInputComponent 
				setInputText={setInputText}
				setVisibility={setVisibility}
				addTextField={addTextField}
				registrationSucceded={registrationSucceded}
				registrationFailed={registrationFailed}
				registrationInProcess={registrationInProcess}
				input={input}/>
				{(!registration.isAuthorized && registration.error != '') ? <ErrorField /> : true}
			</div>
		);
	}
}

const mapStateToProps = store => {
	return{
		input: store.input,
		registration: store.registration
	}
}

const mapDispatchToProps = dispatch =>({
	setInputText: text => dispatch(setInputText(text)),
	setVisibility: filter => dispatch(setVisibility(filter)),
	addTextField: elements => dispatch(addTextField(elements)),
	registrationInProcess: elements => dispatch(registrationInProcess(elements)),
	registrationSucceded: elements => dispatch(registrationSucceded(elements)),
	registrationFailed: elements => dispatch(registrationFailed(elements)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataInput);
