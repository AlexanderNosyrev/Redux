import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { FormGroup, Label, Input, FormText } from 'reactstrap';

class TextInput extends Component {
	render(){
		const {label} = this.props;
		return(
			<div>
				<Label >{label}</Label>
				<FormGroup>
					<Input/>
				</FormGroup>
			</div>
		)
	}
}

export default (TextInput);