import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setInputText, setVisibility, addTextField} from '../actions/InputActions';
import DataInputComponent from '../components/DataInputComponent';

class DataInput extends Component {

	render() {
		const {setInputText, setVisibility, addTextField, input} = this.props;
		return (
			<div>
				<DataInputComponent 
				setInputText={setInputText}
				setVisibility={setVisibility}
				addTextField={addTextField}
				input={input}/>
			</div>
		);
	}
}

const mapStateToProps = store => {
	return{
		input: store.input,
	}
}

const mapDispatchToProps = dispatch =>({
	setInputText: text => dispatch(setInputText(text)),
	setVisibility: filter => dispatch(setVisibility(filter)),
	addTextField: elements => dispatch(addTextField(elements)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataInput);
