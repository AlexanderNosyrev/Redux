import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { Input} from 'reactstrap';

class CheckBoxField extends Component {
	onChange = () => {
		console.log('changed')
	}
	render(){
		const {
			label,
			classes,
			onClick,
			isCheckBoxChecked
		} = this.props;
		return(
			<div onClick={onClick}>
				<Input type="checkbox" className={classes.agree} onChange={this.onChange} checked={isCheckBoxChecked ? 'checked' : false} />
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

const mapStateToProps = (store) => {
	return{
		isCheckBoxChecked: store.isCheckBoxChecked
	}
}

export default connect(mapStateToProps)(injectSheet(styles)(CheckBoxField));