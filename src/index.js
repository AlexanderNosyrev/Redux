import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/index.js';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import './index.css';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
