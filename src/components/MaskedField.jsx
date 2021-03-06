import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import injectSheet from 'react-jss';
import { FormGroup } from 'reactstrap';

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
		const {input, label, classes, placeholder, placeholderFocused, mask} = this.props;
		const isFocused = this.state.isFocused;
		return(
			<div>
				<label>{label}</label>
				<FormGroup>
					<MaskedInput
						{...input}
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

MaskedField.propTypes = {
	classes: PropTypes.objectOf(PropTypes.any).isRequired,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	placeholderFocused: PropTypes.string,
	mask: PropTypes.array,
	input: PropTypes.objectOf(PropTypes.any).isRequired,
};

const styles = (theme) => ({
})

export default injectSheet(styles)(MaskedField);