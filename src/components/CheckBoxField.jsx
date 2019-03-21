import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Input} from 'reactstrap';

class CheckBoxField extends Component {
	render(){
		const {
			label,
			classes,
			onClick
		} = this.props;
		return(
			<div onClick={onClick}>
				<Input type="checkbox" className={classes.agree} />
				<label className={classes.disclaimer}>{label}</label>
			</div>
		)
	}
}

CheckBoxField.propTypes = {
	classes: PropTypes.objectOf(PropTypes.any).isRequired,
	label: PropTypes.object.isRequired,
};

const styles = (theme) =>({
	disclaimer: {
		color: '#687687',
		fontSize: '12',
		marginLeft: 25
	},
	agree: {
		width: 20,
		height: 20,
		marginLeft: 0,
		marginTop: 0
	}
})

export default injectSheet(styles)(CheckBoxField);