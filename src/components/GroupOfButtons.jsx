import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomPopover from './CustomPopover.jsx';
import injectSheet from 'react-jss';
import { Button, ButtonGroup, FormGroup } from 'reactstrap';

class GroupOfButtons extends Component {
	state = {
		selected: false,
		hover: false
	}
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
	errorRef = React.createRef();
	onButtonClick = (button) => {
		this.setState( (prevState) => ({selected: !prevState.selected}));
		this.props.input.onFocus();
		this.props.input.onChange({
			name: button.name,
			code: button.code
		});
		this.props.input.onBlur();
	}
	render(){
		const {
			input,
			classes,
			label,
			options,
			meta
		} = this.props;
		return(
			<div>
				<label className={classes.red}>{label}</label>
				<FormGroup>
					<ButtonGroup className={`${classes.buttonFromGroup} ${(meta.error && meta.touched) ? classes.errorField : classes.default}`}
					onMouseLeave={this.onMouseLeave}
					onMouseEnter={this.onMouseEnter}>
						{options.map((button, index) => (
								<Button
									onClick={() => this.onButtonClick(button)}
									className={
										(button.code === input.value.code) ? classes.btnPrimary : classes.btnDefault
									}
									color={(button.code === input.value.code) ? 'primary' : 'secondary'}
									size='sm'
									key={index}
								>
									{button.label}
							</Button>
						))}
					</ButtonGroup>
					{meta.error && <span ref={this.errorRef}></span>}
					{meta.error && meta.touched && <CustomPopover 
						target={this.errorRef}
						isOpen={this.state.hover}
						placement='bottom'
						popoverText={meta.error}
					/>}
				</FormGroup>
			</div>
		)
	}
}

GroupOfButtons.propTypes = {
	classes: PropTypes.objectOf(PropTypes.any).isRequired,
	label: PropTypes.string,
	input: PropTypes.objectOf(PropTypes.any).isRequired,
	options: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const styles = (theme) => ({
	buttonFromGroup: {
		display: 'flex'
	},
	errorField: {
		border: '1px solid #ee1d23',
		boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #ee1d23'
	},
	btnDefault: {
		color: '#333',
		backgroundColor: '#fff',
		borderColor: '#ccc',
	},
	btnPrimary: {
		color: '#fff',
		backgroundColor: '#337ab7',
		borderColor: '#2e6da4',
	}
})

export default injectSheet(styles)(GroupOfButtons);