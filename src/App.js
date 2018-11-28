import React, { Component } from 'react';
import {connect} from 'react-redux';
import {DataInput} from './components/DataInput';
import {ListElem} from './components/ListElem';
import {setInputText} from './actions/InputActions';
import './App.css';


class App extends Component {
	render() {
		const {input, list, setInputText} = this.props;
		console.log('Props: ', this.props);
		return (
			<div>
				<DataInput setInputText={setInputText}></DataInput>
				<ListElem></ListElem>
			</div>
		);
	}
}

const mapStateToProps = store => {
	console.log('store: ',store);
	return{
		input: store.input,
	}
}

const mapDispatchToProps = dispatch =>({
	setInputText: text => dispatch(setInputText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


