import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const Title = ({classes, name}) =>{
	return(
		<div>
			<h2 className={classes.h2}>Активация полисов "{name}"</h2>
			<hr className={classes.hr}></hr>
		</div>
	)
}

const styles = theme => ({
	hr: {
		marginTop: 20,
		marginBottom: 20,
		border: 0,
		borderTop: '1px solid #eee'
	},
	h2: {
		boxShadow: '0 14px 30px -18px rgba(0,0,0,0.9)',
		color: 'rgb(10,41,115)',
		fontSize: 25,
		fontFamily: 'MetaMediumCyr',
		textAlign: 'center',
		height: 38
	}
});

export default injectSheet(styles)(Title);