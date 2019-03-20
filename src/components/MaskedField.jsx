import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import injectSheet from 'react-jss';
import { FormGroup, Input } from 'reactstrap';

class MaskedField extends Component {
	state = {
		isFocused: false
	}
	onFocus = (e) => {
		this.setState({isFocused: true})
	}
	onBlur = (e) => {
		this.setState({isFocused: false})
	}
	onClick = (e) => {
		console.log(this.state);
	}
	render(){
		const {label, classes, placeholder, placeholderFocused, mask} = this.props;
		const isFocused = this.state.isFocused;
		return(
			<div>
				<label>{label}</label>
				<FormGroup>
					<MaskedInput
						onFocus={this.onFocus}
						onBlur={this.onBlur}
						mask={mask}
						className="form-control form-control-sm"
						placeholder={ isFocused ? placeholderFocused : placeholder}
						placeholderChar={"✻"}
						guide={true}
						autoComplete="off"
					/>
				</FormGroup>
			</div>
		)
	}
}

const styles = (theme) => ({
})

export default injectSheet(styles)(MaskedField);