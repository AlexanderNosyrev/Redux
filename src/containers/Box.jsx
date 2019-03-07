import React, { Component } from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { Form, Field } from 'react-final-form'
import { Container, Row, Col, InputGroup } from 'reactstrap';
import TextInput from '../components/TextInput.jsx';
import Title from '../components/Title.jsx';
import BlockTitle from '../components/BlockTitle.jsx';
// import {Title, TextInput} from '../components';
// import List from './containers/List.jsx';

class Box extends Component {
	handleSubmit = (e) => {
		console.log('Submit!')
	}
	render() {
		const {productName, classes} = this.props;
		return (
			<div>
				<Title name={productName}/>
				<Form 
				onSubmit={this.handleSubmit}
				render={({ handleSubmit, pristine, invalid, values }) =>(
					<Row>
						<Col sm='3'>
							<div id='content'>
								<BlockTitle title={"Данные о полисе"}/>
							</div>
						</Col>
						<Col sm='9' className={classes.section}>
							<Row>
								<Col sm='4'>
									"Номер полиса"
								</Col>
								<Col sm='4'>
									<InputGroup>
										<Field
										component={TextInput}
										label="S"
										/>
									</InputGroup>
								</Col>
								<Col sm='4'>
									<InputGroup>
										<Field
										component={TextInput}
										label=" - "
										/>
									</InputGroup>
								</Col>
							</Row>
						</Col>
					</Row>
				)}
				/>
			</div>
		);
	}
}

const styles = theme => ({
	section: {
		boxShadow: '-8px 0px 20px -14px #000'
	}
});

const mapStateToProps = (store) => {
	// console.log(store);
	return{
		productName: store.productName,
	}
}

export default connect(mapStateToProps)(injectSheet(styles)(Box))