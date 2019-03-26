import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
// import injectSheet from 'react-jss';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import MomentLocaleUtils, {formatDate, parseDate} from 'react-day-picker/moment';
import 'moment/locale/ru';
import 'react-day-picker/lib/style.css';

class DatePickerComponent extends Component {
	state = {
		selectedDay: null
	};
	onChange = (day) => {
		this.setState({ selectedDay: day.getTime() });
		this.props.input.onChange({
			value: day.getTime()
		})
	};
	render(){
		const {
			label,
			classes,
			needLabel,
		} = this.props;

		const dayPickerProps = {
			localeUtils: MomentLocaleUtils,
			locale: "ru"
		}
		// console.log('this.state', this.state);
		// console.log('this.props.input.value', this.props.input.value)
		return(
			<div>
				<Label >{needLabel ? label : ''}</Label>
				<FormGroup>
					<DayPickerInput
						style={{width:'100%'}}
						onDayChange={this.onChange}
						dayPickerProps={dayPickerProps}
						formatDate={formatDate}
						parseDate={parseDate}
						firstDayOfWeek={1}
						inputProps={{ style: styles }}
						placeholder={'ДД. ММ. ГГГГ'}
					/>
				</FormGroup>
			</div>
		)
	}
}

const styles  = {
	height: 'calc(1.5em + .5rem + 2px)',
	padding: '.25rem .5rem',
	fontSize: '.875rem',
	lineHeight: '1.5rem',
	borderRadius: '.2rem',
	border: '1px solid #ced4da',
	width: '100%'
}

DatePickerComponent.propTypes = {
	// classes: PropTypes.objectOf(PropTypes.any).isRequired,
	label: PropTypes.string,
	needLabel: PropTypes.bool,
	placeholderNotLabel: PropTypes.bool,
	placeholder: PropTypes.string,
	type: PropTypes.string.isRequired,
	input: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default (DatePickerComponent);