import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Page extends Component{
	onClick = (e) =>{
		const year = +e.currentTarget.innerText;
		this.props.loadPhotos(year);
	}
	render(){
		const {year, photos, isLoaded, loadText} = this.props;
		return(
			<div className='ib page'>
				<div >
					<button className='btn' onClick={this.onClick}>2018</button>
					<button className='btn' onClick={this.onClick}>2017</button>
					<button className='btn' onClick={this.onClick}>2016</button>
					<button className='btn' onClick={this.onClick}>2015</button>
					<button className='btn' onClick={this.onClick}>2014</button>
				</div>
					<p>{isLoaded ? `У тебя ${photos.length} фото за ${year} год` : loadText}</p>
			</div>
		)
	}
}

Page.propTypes = {
	year: PropTypes.number.isRequired,
	photos: PropTypes.array.isRequired,
}