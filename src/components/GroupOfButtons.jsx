import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Button, ButtonGroup, FormGroup } from 'reactstrap';

class GroupOfButtons extends Component {
	state = {
		selected: false
	}
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
		const {input, classes, label, options} = this.props;
		return(
			<div>
				<label className={classes.red}>{label}</label>
				<FormGroup>
					<ButtonGroup className={classes.buttonFromGroup}>
						{options.map((button, index) => (
								<Button
									onClick={() => this.onButtonClick(button)}
									className={(button.code === input.value.code) ? classes.btnPrimary : classes.btnDefault}
									color={(button.code === input.value.code) ? 'primary' : 'secondary'}
									size='sm'
									key={index}
								>
									{button.label}
							</Button>
						))}
					</ButtonGroup>
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