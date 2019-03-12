import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { FormGroup, Label, Input, FormText } from 'reactstrap';

class TextInput extends Component {
	render(){
		const {
			label,
			needLabel,
			placeholder,
			placeholderNotLabel
		} = this.props;
		return(
			<div>
				<Label >{needLabel ? label : ''}</Label>
				<FormGroup>
					<Input bsSize='sm' placeholder={placeholderNotLabel ? placeholder : label}/>
				</FormGroup>
			</div>
		)
	}
}

export default (TextInput);