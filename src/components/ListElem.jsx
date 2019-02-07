import React, { Component } from 'react';
import {connect} from 'react-redux';

function ListElem(props) {
	const {elem} = props;
	return (
		<div className={'listContainer'}>
			{
				elem.map((p) => (
					<p key={p.id}>{p.elem}</p>
				))
			}
		</div>
	);
}

const mapStateToProps = store => {
	return{
		list: store.list,
		elem: store.elem
	}
}

export default connect(mapStateToProps)(ListElem);

