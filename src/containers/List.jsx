import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ListElem from '../components/ListElem';
import {setVisibility} from '../actions/InputActions';
import 'bootstrap/dist/css/bootstrap.min.css'


class List extends Component {
	onLinkClickHide = (e) => {
		this.props.setVisibility(false);
		console.log('AFTER: ',this.props)
	}
	onLinkClickShow = (e) => {
		this.props.setVisibility(true);
	}
	render() {
		console.log('Props: ', this.props)
		const {list, elem} = this.props;
		return (
			<div>
				{(list.visible === false && elem.length > 0) ? <button onClick={this.onLinkClickShow} className={'visibilityFilter'}>Показать</button> : true}
				{list.visible === true ? <ListElem /> : true}
				{list.visible === true ? <button onClick={this.onLinkClickHide} className={'visibilityFilter'}>Закрыть</button> : true}
			</div>
		);
	}
}

const mapStateToProps = store => {
	return{
		list: store.list,
		elem: store.elem
	}
}

const mapDispatchToProps = dispatch =>({
	setVisibility: filter => dispatch(setVisibility(filter)),
});

List.propTypes = {
	list: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

