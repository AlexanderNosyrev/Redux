import React, { Component } from 'react';
import {connect} from 'react-redux';
import { User } from '../components/User';
import { UserInput } from '../components/UserInput';
import { setName } from '../actions/PageActions';

class UserContainer extends Component {
	render() {
		const {user, setName} = this.props;
		return (
			<div>
				<UserInput setName={setName} />
				<User name={user.name} />
			</div>
		);
	}
}

const mapStateToProps = store => {
	return{
		user: store.user,
	}
}

const mapDispatchToProps = dispatch =>({
	setName: user => dispatch(setName(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
