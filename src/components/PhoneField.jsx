import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import injectSheet from 'react-jss';
import { FormGroup } from 'reactstrap';

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
		const {label, classes} = this.props;
		return(
			<div>
				<label>{label}</label>
				<FormGroup>
					<MaskedInput
						mask={['(', /[1-9]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-',/\d/, /\d/]}
						onFocus={this.onFocus}
						onBlur={this.onBlur}
						className="form-control form-control-sm"
						placeholder={this.state.placeholder}
						guide={true}
					/>
				</FormGroup>
			</div>
		)
	}
}

const styles = (theme) => ({
})

export default injectSheet(styles)(PhoneField);