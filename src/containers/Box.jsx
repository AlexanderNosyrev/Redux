import React, { Component } from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import moment from "moment";
import { Form, Field } from 'react-final-form'
import { Row, Col, InputGroup, Button } from 'reactstrap';
import TextInput from '../components/TextInput.jsx';
import Title from '../components/Title.jsx';
import {checkboxCheck} from '../ducks';
import {store} from '../store';
import BlockTitle from '../components/BlockTitle.jsx';
import DatePickerComponent from '../datepicker/DatePickerComponent.jsx';
import MaskedField from '../components/MaskedField.jsx';
import GroupOfButtons from '../components/GroupOfButtons.jsx';
import CheckBoxField from '../components/CheckBoxField.jsx';
import PhoneField from '../components/PhoneField.jsx';
// import {Title, TextInput} from '../components';
// import List from './containers/List.jsx';

class Box extends Component {
	onSubmit = (values) => {
		console.log(values)
	}
	onClick = (e) => {
		console.log(store.getState())
	}
	render() {
		const {
			productName,
			classes,
			checkboxCheck,
			isCheckBoxChecked
		} = this.props;
		const fromDate = moment().format('D.MM.YYYY');
		const toDate = moment().add(1, 'years').format('D.MM.YYYY');
		return (
			<div>
				<Title name={productName}/>
				<Form 
				onSubmit={this.onSubmit}
				render={({ handleSubmit, pristine, invalid, values }) =>(
					<form onSubmit={handleSubmit}>
						<div>
							<Row className={classes.formBlock}>
								<Col sm='3'>
									<div id='content' style={{marginTop: 70}}>
										<BlockTitle title={"Данные о полисе:"}/>
									</div>
								</Col>
								<Col sm='9' onClick={this.onClick} className={classes.section}>
									<Row className={classes.rowField}>
										<Col sm='4' className={classes.centered}>
											Номер полиса:
										</Col>
										<Col sm='4'>
											<InputGroup>
												<Field
													name="content.policy.seria"
													component={MaskedField}
													placeholderFocused={'✻✻✻✻✻'}
													placeholder={'пять цифр'}
													mask={[/[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/]}
													needLabel={true}
													label="S"
												/>
											</InputGroup>
										</Col>
										<Col sm='4'>
											<InputGroup>
												<Field
													name="content.policy.number"
													component={MaskedField}
													placeholderFocused={'✻✻✻✻✻✻✻'}
													placeholder={'семь цифр'}
													mask={[/[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/]}
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
												name="content.policy.code"
												component={MaskedField}
												placeholderFocused={'✻✻✻✻✻✻'}
												placeholder={'шесть цифр'}
												mask={[/[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/]}
												needLabel={true}
												/>
										</Col>
									</Row>
									<Row>
										<Col sm='12'>
											<p>Полис действует с: <span style={{fontWeight: 'bold'}}>{fromDate}</span> по <span style={{fontWeight: 'bold'}}>{toDate}</span></p>
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
												name="content.policyHolder.lastName"
												component={TextInput}
												type='text'
												needLabel={false}
												label='Фамилия:'
												/>
										</Col>
										<Col sm='4'>
											<Field
												name="content.policyHolder.firstName"
												component={TextInput}
												type='text'
												needLabel={false}
												label='Имя:'
												/>
										</Col>
										<Col sm='4'>
											<Field
												name="content.policyHolder.middleName"
												component={TextInput}
												type='text'
												needLabel={false}
												label='Отчество:'
												/>
										</Col>
									</Row>
									<Row >
										<Col sm='4'>
											<Field
												name="content.policyHolder.birthDate"
												component={DatePickerComponent}
												type='text'
												needLabel={true}
												label='Дата рождения:'
												placeholder='ДД. ММ. ГГГГ'
												/>
										</Col>
										<Col sm='8'>
											<Field
												name="content.policyHolder.sex"
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
												name="content.policyHolder.phone"
												size='sm'
												component={PhoneField}
												label='Мобильный телефон:'
											/>
										</Col>
										<Col sm='8'>
											<Field
												name="content.policyHolder.email"
												component={TextInput}
												type='text'
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
												name="content.policyHolder.email1"
												component={TextInput}
												type='text'
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
												name="content.object.mark"
												component={TextInput}
												type='text'
												needLabel={true}
												label='Марка'
												placeholderNotLabel={true}
												placeholder='Впишите марку:'
												/>
										</Col>
										<Col sm='6'>
											<Field
												name="content.object.model"
												component={TextInput}
												type='text'
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
												name="content.object.emei"
												component={TextInput}
												type='text'
												needLabel={true}
												label='Серийный номер/Emei устройства:'
												placeholderNotLabel={true}
												/>
										</Col>
										<Col sm='6'>
											<Field
												name="content.object.cost"
												component={TextInput}
												type='text'
												needLabel={true}
												label='Стоимость имущества (руб.):'
												placeholderNotLabel={true}
												/>
										</Col>
									</Row>
									<Row className={classes.rowField}>
										<Col sm='6'>
											<Field
												name="content.object.buyDate"
												component={DatePickerComponent}
												needLabel={true}
												type='text'
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
										onClick={checkboxCheck}
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
									<Button disabled={isCheckBoxChecked ? false : true} color='primary' type="submit">
											Активировать
									</Button>
								</Col>
							</Row>
							<Row>
								<Col><pre>{JSON.stringify(values, 0, 2)}</pre></Col>
							</Row>
						</div>
					</form>
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
		isCheckBoxChecked: store.isCheckBoxChecked
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		checkboxCheck: (isCheckBoxChecked) => dispatch(checkboxCheck(isCheckBoxChecked))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Box))