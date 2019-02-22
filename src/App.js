import React, { Component } from 'react';
// import DataInput from './containers/DataInput.jsx';
// import List from './containers/List.jsx';
import Main from './Main';
import Header from './components/Header';
import './App.css';


class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<Main/>
			</div>
		);
	}
}

export default App;


