import React, { Component } from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { Form, Field } from 'react-final-form'
import { Container, Row, Col, InputGroup, Input, Button } from 'reactstrap';
import TextInput from '../components/TextInput.jsx';
import Title from '../components/Title.jsx';
import BlockTitle from '../components/BlockTitle.jsx';
import GroupOfButtons from '../components/GroupOfButtons.jsx';
import CheckBoxField from '../components/CheckBoxField.jsx';
import PhoneField from '../components/PhoneField.jsx';
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
					<div>
						<Row className={classes.formBlock}>
							<Col sm='3'>
								<div id='content' style={{marginTop: 70}}>
									<BlockTitle title={"Данные о полисе:"}/>
								</div>
							</Col>
							<Col sm='9' className={classes.section}>
								<Row className={classes.rowField}>
									<Col sm='4' className={classes.centered}>
										Номер полиса:
									</Col>
									<Col sm='4'>
										<InputGroup>
											<Field
											component={TextInput}
											needLabel={true}
											label="S"
											/>
										</InputGroup>
									</Col>
									<Col sm='4'>
										<InputGroup>
											<Field
											component={TextInput}
											needLabel={true}
											label=" - "
											/>
										</InputGroup>
									</Col>
								</Row>
								<Row className={classes.rowField}>
									<Col sm='4' className={classes.centered}>
										Код активации полиса:
									</Col>
									<Col sm='8'>
										<Field
											component={TextInput}
											needLabel={true}
											/>
									</Col>
								</Row>
								<Row>
									<Col sm='12'>
										<p>Полис действует с: <span style={{fontWeight: 'bold'}}>26.03.2019</span> по <span style={{fontWeight: 'bold'}}>25.03.2020</span></p>
									</Col>
								</Row>
								<Row>
									<Col sm='12'>
										<p>Вступает в силу с 00 часов 00 минут пятнадцатого дня, следующего за датой активации, и действует в течение одного года.</p>
									</Col>
								</Row>
							</Col>
						</Row>
						<Row className={classes.formBlock}>
							<Col sm='3'>
								<div id='content' style={{marginTop: 70}}>
									<BlockTitle title={"Страхователь:"}/>
								</div>
							</Col>
							<Col sm='9' className={classes.section}>
								<Row className={classes.rowField}>
									<Col sm='4'>
										<Field
											component={TextInput}
											needLabel={false}
											label='Фамилия:'
											/>
									</Col>
									<Col sm='4'>
										<Field
											component={TextInput}
											needLabel={false}
											label='Имя:'
											/>
									</Col>
									<Col sm='4'>
										<Field
											component={TextInput}
											needLabel={false}
											label='Отчество:'
											/>
									</Col>
								</Row>
								<Row >
									<Col sm='4'>
										<Field
											component={TextInput}
											needLabel={true}
											label='Дата рождения:'
											/>
									</Col>
									<Col sm='8'>
										<Field
											component={GroupOfButtons}
											label="Пол:"
											options={[
												{code: 'male', name: 'Мужской', label: 'М'},
												{code: 'female', name: 'Женский', label: 'Ж'}
											]}
										/>
									</Col>
								</Row>
								<Row>
									<Col sm='4'>
										<Field
											size='sm'
											component={PhoneField}
											label='Мобильный телефон:'
										/>
									</Col>
									<Col sm='8'>
										<Field
											component={TextInput}
											label='Адрес электронной почты:'
											needLabel={true}
											placeholderNotLabel={true}
											placeholder='Введите адрес электронной почты:'
										/>
									</Col>
								</Row>
								<Row>
									<Col sm='4'></Col>
									<Col sm='8'>
										<Field
											component={TextInput}
											label=''
											needLabel={true}
											placeholderNotLabel={true}
											placeholder='Подтвердите адрес электронной почты:'
										/>
									</Col>
								</Row>
								<Row>
									<Col sm='4'></Col>
									<Col sm='8'>
										<p>Приложение №2 - Информация, предоставляемая при активации, будет выслана на указанный E-mail</p>
									</Col>
								</Row>
							</Col>
						</Row>
						<Row className={classes.formBlock}>
							<Col sm='3'>
								<div id='content' style={{marginTop: 70}}>
									<BlockTitle title={"Застрахованное имущество:"}/>
								</div>
							</Col>
							<Col sm='9' className={classes.section}>
								<Row className={classes.rowField}>
									<Col sm='6'>
										<Field
											component={TextInput}
											needLabel={true}
											label='Марка'
											placeholderNotLabel={true}
											placeholder='Впишите марку:'
											/>
									</Col>
									<Col sm='6'>
										<Field
											component={TextInput}
											needLabel={true}
											label='Модель'
											placeholderNotLabel={true}
											placeholder='Впишите модель:'
											/>
									</Col>
								</Row>
								<Row className={classes.rowField}>
									<Col sm='6'>
										<Field
											component={TextInput}
											needLabel={true}
											label='Серийный номер/Emei устройства:'
											placeholderNotLabel={true}
											/>
									</Col>
									<Col sm='6'>
										<Field
											component={TextInput}
											needLabel={true}
											label='Стоимость имущества (руб.):'
											placeholderNotLabel={true}
											/>
									</Col>
								</Row>
								<Row className={classes.rowField}>
									<Col sm='6'>
										<Field
											component={TextInput}
											needLabel={true}
											label='Дата покупки:'
											placeholderNotLabel={true}
											placeholder='дд.мм.гггг'
											/>
									</Col>
								</Row>
							</Col>
						</Row>
						<Row>
							<Col sm='12'>
								<Field
									component={CheckBoxField}
									label={
										<div>
											<p>Осуществляя активацию полиса он-лайн и заполняя настоящие формы я даю согласие ООО СК "ВТБ Страхование" 
											(далее – Компания, адрес местонахождения: Чистопрудный бульвар, д. 8, стр. 1, Москва, Россия, 101000) на 
											обработку персональных данных и информации, в том числе на сбор, систематизацию, блокирование, уничтожение 
											персональных данных и иных действия, предусмотренные Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» 
											в целях определения условий и заключения со мной договора страхования, проведения маркетинговых исследований. При этом 
											такое согласие я даю на неограниченный срок и могу отозвать согласие в любое время путем передачи Компании соответствующего 
											уведомления.</p>
											<p>Безопасность передаваемой информации обеспечивается с помощью современных протоколов обеспечения безопасности в Интернет (SSL/TLS).</p>
										</div>
									}
								/>
							</Col>
						</Row>
						<Row>
							<Col className={classes.rightOriented} sm='12'>
								<Button color='primary' type="submit">
										Активировать
								</Button>
							</Col>
						</Row>
					</div>
				)}
				/>
			</div>
		);
	}
}

const styles = theme => ({
	section: {
		boxShadow: '-8px 0px 20px -14px #000'
	},
	centered: {
		display: 'flex',
		alignItems: 'center'
	},
	formBlock: {
		marginLeft: 0,
		marginRight: 0,
		backgroundColor: 'rgb(212,225,240)',
		marginBottom: 5,
	},
	rightOriented: {
		textAlign: 'right'
	}
});

const mapStateToProps = (store) => {
	// console.log(store);
	return{
		productName: store.productName,
	}
}

export default connect(mapStateToProps)(injectSheet(styles)(Box))