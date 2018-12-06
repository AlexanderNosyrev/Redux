import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import './index.css';

// import registerServiceWorker from './registerServiceWorker';
// import injectSheet  from 'jss';

// const theme = {
// 	colors: {
// 		main: 'red',
// 		dark
// 	}
// }


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
