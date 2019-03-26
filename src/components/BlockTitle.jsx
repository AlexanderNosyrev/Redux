import React from 'react';
import injectSheet from 'react-jss';

const BlockTitle = ({classes, title}) =>{
	return(
		<div>
			<h3 className={classes.h3}>{title}</h3>
		</div>
	)
}

const styles = theme => ({
	h3: {
		color: '#0A2973',
		// lineHeight: 30,
		// marginTop: 70,
		fontFamily: "MetaMediumCyr",
		fontSize: 19
	}
});

export default injectSheet(styles)(BlockTitle);