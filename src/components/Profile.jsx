import React, { Component } from 'react';
import {connect} from 'react-redux';
import injectSheet from 'react-jss';
import {logOut} from '../ducks'

class Profile extends Component {

	constructor(props){
		super(props);
		this.state = {}
	}

	onClick = (e) => {
		console.log(this.props);
		this.props.logOut(this.state);
	}

	render(){
		const {user, classes} = this.props
		return (
			<div>
				<h3>Hello, {user.login}!
				Welcome to your page!</h3>
				<button className={classes.myButton} onClick={this.onClick}>
					Exit
				</button>
			</div>
		);
	}
}

const mapStateToProps = (store) => {
	// console.log(store);
	return{
		user: store.user
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		logOut: (user) => dispatch(logOut(user))
	}
}

const styles = {
	myButton: {
		fontSize: 13.5,
		fontStyle: 'italic',
		marginTop: 5,
		borderRadius: 4,
		padding:{
			top: 5, 
			right: 20,
			bottom: 5,
			left: 20
		}
	},
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Profile));


