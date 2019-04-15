import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class User extends Component{
	render(){
		console.log(this.props)
		const { isLoaded, user } = this.props;
		return(
			<div className='ib user'>
				<p>{isLoaded ? `Привет, ${user.user.name}` : 'Привет, Аноним'}</p>
			</div>
		)
	}
}

User.propTypes  = {
	isLoaded: PropTypes.bool.isRequired
}
