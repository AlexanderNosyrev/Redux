import React, { Component } from 'react';
import {connect} from 'react-redux';
import injectSheet from 'react-jss';
import { NavLink as RRNavLink} from 'react-router-dom';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink} from 'reactstrap';

const Header = ({isAuthorised, classes}) => { // eslint-disable-line
	return (
		<div>
			<header >
				<Nav className={classes.myMenu} pills>
					<NavItem>
						<NavLink tag={RRNavLink} to="/login" replace>Форма входа</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={RRNavLink} exact to="/news" replace>Новости</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={RRNavLink} to="/profile" replace>Профиль</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={RRNavLink} exact to="/" replace>Главная</NavLink>
					</NavItem>
				</Nav>
			</header>
		</div>
	);
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