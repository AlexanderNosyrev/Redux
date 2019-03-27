import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import CustomPopover from './CustomPopover.jsx';
import { FormGroup, Label, Input } from 'reactstrap';

class TextInput extends Component {
	state={
		hover: false
	};

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

	render(){
		const {
			input,
			meta,
			type,
			classes,
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
					onMouseEnter={this.onMouseEnter}
					onMouseLeave={this.onMouseLeave}
					className={(meta.error&& meta.touched) ? classes.errorField : classes.default}
					bsSize='sm'
					type={type}
					placeholder={placeholderNotLabel ? placeholder : label}/>
					{meta.error && meta.touched && <span ref={this.errorRef}></span>}
					{meta.error && meta.touched && <CustomPopover target={this.errorRef} isOpen={this.state.hover} popoverText={meta.error} />}
				</FormGroup>
			</div>
		)
	}
}

const styles = theme => ({
	errorField: {
		border: '1px solid #ee1d23',
		boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #ee1d23'
	}
})

TextInput.propTypes = {
	// classes: PropTypes.objectOf(PropTypes.any).isRequired,
	label: PropTypes.string,
	needLabel: PropTypes.bool,
	placeholderNotLabel: PropTypes.bool,
	placeholder: PropTypes.string,
	type: PropTypes.string.isRequired,
	input: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default injectSheet(styles)(TextInput);