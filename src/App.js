import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import BooksTable from './containers/Table';
import {BasicExample, Home} from './containers/BasicRouterExample';
import {Counter} from './containers/Counter';


class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<div>
						<nav>
							<Link to="/">Home</Link>
						</nav>
						<nav>
							<Link to="/counter">Counter</Link>
						</nav>
						<nav>
							<Link to="/basicExample">BasicExample</Link>
						</nav>
						<nav>
							<Link to="/table">BooksTable</Link>
						</nav>
						<hr />
						<Route exact path="/" component={Home} />
						<Route exact path="/Counter" component={Counter} />
						<Route path="/basicExample" component={BasicExample} />
						<Route path="/table" component={BooksTable} />
					</div>
				</Router>
			</div>
		);
	}
}

export {App};


