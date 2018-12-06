import React, { Component } from 'react';
import DataInput from './containers/DataInput.jsx';
import List from './containers/List';
import './App.css';


class App extends Component {
	render() {
		return (
			<div>
				<DataInput />
				<List />
			</div>
		);
	}
}

export default App;


