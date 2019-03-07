import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
// import RedirectToMain from './components/RedirectToMain.jsx';

class Main extends Component { // eslint-disable-line
	render() {
		const isAuthorised = this.props.isAuthorised;
		return (
			<div id="content">
				{/*<div/>
					<Switch>
						<Route path="/login" component={LoginContainer} />
					</Switch>*/}
			</div>
		);
	}
}

const mapStateToProps = (store) => {
	// console.log(store);
	return{
		isAuthorised: store.isAuthorised,
		user: store.user
	}
}

export default withRouter(connect(mapStateToProps)(Main))