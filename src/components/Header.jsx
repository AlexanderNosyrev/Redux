import React, { Component } from 'react';
import {connect} from 'react-redux';
import injectSheet from 'react-jss';
import { NavLink } from 'react-router-dom';

class Header extends Component { // eslint-disable-line
	render() {
		const {isAuthorised, classes, children} = this.props;
		return (
			<div>
				<header >
					<ul className={classes.myMenu}>
					{/*<li className={classes.myMenuBlock}>
												<NavLink to="/login" replace>Форма входа</NavLink>
											</li>*/}
						<li className={classes.myMenuBlock}>
							<NavLink exact  to="/news" replace>Новости</NavLink>
						</li>
						<li className={classes.myMenuBlock}>
								<NavLink to="/profile" replace>Профиль</NavLink>
						</li>
						<li className={classes.myMenuBlock}>
							<NavLink exact to="/" replace>Главная</NavLink>
						</li>
					</ul>
				</header>
			</div>
		);
	}
}

const mapStateToProps = (store) => {
	// console.log(store);
	return{
		isAuthorised: store.isAuthorised
	}
}

const styles = {
	myMenu: {
		display: 'flex',
		width: '100%',
		backgroundColor: '#ABCDEF'
	},
	myMenuBlock: {
		margin: 20,
	}
};

export default connect(mapStateToProps)(injectSheet(styles)(Header));