import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import injectSheet from 'react-jss';
import { FormGroup, Label, Input } from 'reactstrap';

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

TextInput.propTypes = {
	// classes: PropTypes.objectOf(PropTypes.any).isRequired,
	label: PropTypes.string,
	needLabel: PropTypes.bool,
	placeholderNotLabel: PropTypes.bool,
	placeholder: PropTypes.string,
	type: PropTypes.string.isRequired,
	input: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default (TextInput);