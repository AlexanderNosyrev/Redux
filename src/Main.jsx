import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Primary from './components/Primary.jsx';
import LoginContainer from './containers/LoginContainer.jsx';
import News from './components/News.jsx';
// import RedirectToMain from './components/RedirectToMain.jsx';
import Profile from './components/Profile.jsx';

class Main extends Component { // eslint-disable-line
	render() {
		const isAuthorised = this.props.isAuthorised;
		return (
			<div id="content">
				<div/>
					<Switch>
						<Route exact path="/" component={Primary}/>
						<Route path="/login" component={LoginContainer} />
						<Route exact path="/news" component={News} />
						<Route path="/profile" component={ (isAuthorised) ? Profile : LoginContainer} />
						<Route
							render={() =>
								isAuthorised ? (
									<Redirect to="/profile" />
								) : (
									<LoginContainer />
								)
							}
						/>
					</Switch>
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