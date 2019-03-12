import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Button, ButtonGroup, FormGroup, label } from 'reactstrap';

class GroupOfButtons extends Component {
	state = {
		selected: false
	}
	onClick = (e) => {
		this.setState({selected: true})
	}
	render(){
		const {classes, label, options} = this.props;
		return(
			<div>
				<label className={classes.red}>{label}</label>
				<FormGroup>
					<ButtonGroup className={classes.buttonFromGroup}>
						{options.map((button, index) => (
								<Button
									onClick={this.onClick}
									className={classes.btnDefault}
									size='sm'
									key={index}
									color={this.state.selected ? 'primary' : 'secondary'}
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