import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { User } from '../components/User';
import { UserInput } from '../components/UserInput';
import { Page } from '../components/Page';
import { setYear, setName } from '../actions/PageActions';

class App extends Component {
	render() {
		const {user, page, setYear, setName} = this.props;
		return (
			<div className='App'>
				<header className="App-header">
					<h1 className="App-title">Мой топ фото</h1>
				</header>
				<p className='App-intro'>Здесь будут фото (не факт)</p>
				<UserInput setName={setName} />
				<User name={user.name} />
				<Page year = {page.year} photos = {page.photos} setYear={setYear} />
			</div>
		);
	}
}

const mapStateToProps = store => {
	console.log(store);
	return{
		user: store.user,
		page: store.page,
	}
}

const mapDispatchToProps = dispatch =>({
	setYear: year => dispatch(setYear(year)),
	setName: user => dispatch(setName(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


/*return Object.assign({}, state, {
        photos: action.payload
      })

Converted to 

return {...state, photos: action.payload}*/