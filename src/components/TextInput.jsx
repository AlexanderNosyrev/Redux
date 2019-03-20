import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { FormGroup, Label, Input, FormText } from 'reactstrap';

class TextInput extends Component {
	render(){
		const {
			input,
			type,
			label,
			needLabel,
			placeholder,
			placeholderNotLabel,
		} = this.props;
		return(
			<div>
				<Label >{needLabel ? label : ''}</Label>
				<FormGroup>
					<Input 
					{...input}
					bsSize='sm'
					type={type}
					placeholder={placeholderNotLabel ? placeholder : label}/>
				</FormGroup>
			</div>
		)
	}
}

export default (TextInput);