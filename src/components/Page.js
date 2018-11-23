import React from 'react';
import PropTypes from 'prop-types';

export class Page extends React.Component {
	onBtnClick = (e) => {
		const yearCur = e.currentTarget.innerText;
		this.props.getPhotos(yearCur);
		console.log(this.props)
	}
	render() {
		const { year, photos, isFetching } = this.props
		return (
			<div>
				<div>
					<button onClick={this.onBtnClick}>2018</button>
					<button onClick={this.onBtnClick}>2017</button>
					<button onClick={this.onBtnClick}>2016</button>
					<button onClick={this.onBtnClick}>2015</button>
					<button onClick={this.onBtnClick}>2014</button>
				</div>
				<h3>{year} год</h3>
				{isFetching ? <p>Загрузка...</p> : <p>У тебя {photos.length} фото.</p>}
			</div>
		)
	}
}

Page.propTypes = {
	year: PropTypes.string.isRequired,
	photos: PropTypes.array.isRequired,
}