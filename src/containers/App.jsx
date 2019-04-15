import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Page } from '../components/Page.jsx';
import { User } from '../components/User.jsx';
import { loadPhotos } from '../ducks';
import '../App.css';

class App extends Component {
	render() {
		const {user, page, loadPhotos} = this.props;
		return (
			<div className='app'>
				<Page 
					year={page.year}
					photos={page.photos}
					loadPhotos={loadPhotos}
					isLoaded={page.isLoaded}
					loadText={page.loadText}
				/>
				<User
					user={user}
					isLoaded={page.isLoaded}
				/>
			</div>
		)
	}
}

const mapStateToProps = store =>{
	console.log(store);
	return{
		user: store.user,
		page: store.page
	}
}

const mapDispatchToProps = dispatch =>{
	return{
		loadPhotos: year => dispatch(loadPhotos(year)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)