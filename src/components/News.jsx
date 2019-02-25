import React from 'react';
import injectSheet from 'react-jss';
import {NewsData} from '../datas/NewsData';

const News = ({classes}) => {
	return(
		<ul className={classes.ul}>
			{NewsData.map((item) => 
				<li className={classes.li} key={item.id}>{item.content}</li>
			)}
		</ul>
	)
}

const styles = {
	li: {
		fontSize: 14,
		fontStyle: 'italic',
		margin: 5,
	},
	ul: {
		padding: 0
	}
};

export default injectSheet(styles)(News);