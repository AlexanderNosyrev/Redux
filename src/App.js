import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import {Game} from './components/Game.jsx';


class App extends Component {
	render() {
		return (
			<div className='content'>
				<Game/>
			</div>
		);
	}
}

export {App};


