import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ListElem from './ListElem';


class List extends Component {
	render() {
		// console.log('Props: ', this.props)
		const {input, list} = this.props;
		return (
			<div>
				<ul className='listContainer'>
				{list.visible === true ? <ListElem text={input.inputText} /> : console.log('...')}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = store => {
	return{
		input: store.input,
		list: store.list
	}
}

export default connect(mapStateToProps)(List);

