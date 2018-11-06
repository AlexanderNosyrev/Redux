import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import { BrowserRouter } from 'react-router-dom'
// import registerServiceWorker from './registerServiceWorker';
// import injectSheet  from 'jss';

// const theme = {
// 	colors: {
// 		main: 'red',
// 		dark
// 	}
// }


ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);
//registerServiceWorker();