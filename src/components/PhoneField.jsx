import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import injectSheet from 'react-jss';
import { FormGroup, Input } from 'reactstrap';

class PhoneField extends Component {
	state={
		placeholder: "+7__________"
	}
	onFocus = (e) =>{
		this.setState({placeholder: '+7(✻✻✻)✻✻✻-✻✻-✻✻'})
	}
	onBlur = (e) => {
		this.setState({placeholder: '+7__________'})
	}
	render(){
		const {input, label, classes} = this.props;
		return(
			<div>
				<label>{label}</label>
				<FormGroup>
					<MaskedInput
						{...input}
						mask={['+', 7, '(', /[1-9]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-',/\d/, /\d/]}
						onFocus={this.onFocus}
						onBlur={this.onBlur}
						className="form-control form-control-sm"
						placeholder={this.state.placeholder}
						guide={true}
						placeholderChar="✻"
						autoComplete="off"
					/>
				</FormGroup>
			</div>
		)
	}
}

PhoneField.propTypes = {
	input: PropTypes.objectOf(PropTypes.any).isRequired,
	label: PropTypes.string,
	classes: PropTypes.objectOf(PropTypes.any).isRequired
};

const styles = (theme) => ({
})

export default injectSheet(styles)(PhoneField);