import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setVisibility} from '../actions/InputActions';


class ListElem extends Component {
	onLinkClick = (e) => {
		console.log(this.props)
		this.props.setVisibility(false);
	}
	render() {
		const {text, list, setVisibility} = this.props;
		return (
			<li>
				{text}<a onClick={this.onLinkClick} href='#' className={'visibilityFilter'}>Скрыть</a>
			</li>
		);
	}
}

const mapStateToProps = store => {
	return{
		list: store.list,
		input: store.input
	}
}

const mapDispatchToProps = dispatch =>({
	setVisibility: filter => dispatch(setVisibility(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListElem);
