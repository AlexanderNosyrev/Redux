import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import CustomPopover from './CustomPopover.jsx';
import injectSheet from 'react-jss';
import { FormGroup } from 'reactstrap';

class PhoneField extends Component {
	state={
		placeholder: "+7__________",
		hover: false
	}
	errorRef = React.createRef();
	onMouseEnter = () => {
		this.setState({
			hover: true
		});
	}
	onMouseLeave = () => {
		this.setState({
			hover: false
		});
	}
	onFocus = (e) =>{
		this.setState({placeholder: '+7(✻✻✻)✻✻✻-✻✻-✻✻'})
	}
	onBlur = (e) => {
		this.setState({placeholder: '+7__________'})
	}
	render(){
		const {
			input,
			label,
			classes,
			meta
		} = this.props;
		return(
			<div>
				<label>{label}</label>
				<FormGroup>
					<MaskedInput
						{...input}
						mask={['+', 7, '(', /[1-9]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-',/\d/, /\d/]}
						onFocus={this.onFocus}
						onBlur={this.onBlur}
						onMouseLeave={this.onMouseLeave}
						onMouseEnter={this.onMouseEnter}
						className={`form-control form-control-sm ${(meta.error&& meta.touched) ? classes.errorField : classes.default}`}
						placeholder={this.state.placeholder}
						guide={true}
						placeholderChar="✻"
						autoComplete="off"
					/>
					{meta.error && meta.touched && <span ref={this.errorRef}></span>}
					{meta.error && meta.touched && <CustomPopover 
						target={this.errorRef}
						placement='top'
						isOpen={this.state.hover}
						popoverText={meta.error}
					/>}
				</FormGroup>
			</div>
		)
	}
}

PhoneField.propTypes = {
	input: PropTypes.objectOf(PropTypes.any).isRequired,
	meta: PropTypes.objectOf(PropTypes.any).isRequired,
	label: PropTypes.string,
	classes: PropTypes.objectOf(PropTypes.any).isRequired
};

const styles = theme => ({
	errorField: {
		border: '1px solid #ee1d23',
		boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #ee1d23'
	}
})


export default injectSheet(styles)(PhoneField);