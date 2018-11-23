import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Page } from '../components/Page';
import { getPhotos } from '../actions/PageActions';

class PageContainer extends Component {
	render() {
		const {page, getPhotos} = this.props;
		return (
			<Page year = {page.year} photos = {page.photos} isFetching={page.isFetching} getPhotos={getPhotos} />
		);
	}
}

const mapStateToProps = store => {
	return{
		page: store.page,
	}
}

const mapDispatchToProps = dispatch =>({
	getPhotos: year => dispatch(getPhotos(year)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
