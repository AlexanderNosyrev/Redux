import React, { Component } from 'react';
import {connect} from 'react-redux';
import DataInput from './components/DataInput';
import List from './components/List';
import {ListElem} from './components/ListElem';
import {setInputText} from './actions/InputActions';
import {setVisibility} from './actions/InputActions';
import './App.css';


class App extends Component {
	render() {
		const {input, text, setInputText, filter, setVisibility} = this.props;
		// console.log('Props: ', this.props);
		return (
			<div>
				<DataInput setInputText={setInputText} setVisibility={setVisibility}></DataInput>
				<List></List>
			</div>
		);
	}
}

const mapStateToProps = store => {
	// console.log('store: ',store);
	return{
		input: store.input,
		list: store.list,
	}
}

const mapDispatchToProps = dispatch =>({
	setInputText: text => dispatch(setInputText(text)),
	setVisibility: filter => dispatch(setVisibility(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


