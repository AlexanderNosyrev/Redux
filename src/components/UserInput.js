import React from 'react';
import PropTypes from 'prop-types';

export class UserInput extends React.Component{
	btnOnClick = (e) =>{
		const input = document.querySelector('input');
		let nameVal = input.value;
		(nameVal.length > 0) ? (nameVal[0].toUpperCase() + nameVal.slice(1)).trim() : nameVal = 'Филимон';
		this.props.setName(nameVal);
	}
	render(){
		return(
			<div>
				<span>Ваше имя</span>
				<input type='text' placeholder='Филимон'></input>
				<button onClick={this.btnOnClick}>Подтвердить</button>
			</div>
		)
	}
}
