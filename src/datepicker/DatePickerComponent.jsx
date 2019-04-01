import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import injectSheet from 'react-jss';
import CustomPopover from '../components/CustomPopover.jsx';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import MomentLocaleUtils, {formatDate, parseDate} from 'react-day-picker/moment';
import 'moment/locale/ru';
import 'react-day-picker/lib/style.css';

class DatePickerComponent extends Component {
	state = {
		selectedDay: null,
		hover: false
	};
	errorRef = React.createRef();

	onChange = (day) => {
		this.setState({ 
			selectedDay: day,
			hover: false 
		});
		this.props.input.onChange({
			value: day
		})
	};

	onMouseEnter = () => {
		this.setState({
			hover: true
		});
	}

	onMouseLeave = () => {
		this.setState({
			hover: false
		});
	}

	render(){
		const {
			label,
			meta,
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
				<FormGroup
					onMouseEnter={this.onMouseEnter}
					onMouseLeave={this.onMouseLeave}>
					<DayPickerInput
						className={(meta.error && meta.touched) ? classes.errorField : classes.default}
						style={(meta.error && meta.touched) ? {
							width:'100%',
							border: '1px solid #ee1d23',
							boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #ee1d23'
						} :
							{width: '100%'}
						}
						onDayChange={this.onChange}
						dayPickerProps={dayPickerProps}
						formatDate={formatDate}
						parseDate={parseDate}
						firstDayOfWeek={1}
						inputProps={{ style: stylesDayPickerInput }}
						placeholder={'ДД. ММ. ГГГГ'}
					/>
					{meta.error && <span ref={this.errorRef}></span>}
					{meta.error && meta.touched && <CustomPopover target={this.errorRef} isOpen={this.state.hover} placement='bottom' popoverText={meta.error} />}
				</FormGroup>
			</div>
		)
	}
}

const stylesDayPickerInput  = {
	height: 'calc(1.5em + .5rem + 2px)',
	padding: '.25rem .5rem',
	fontSize: '.875rem',
	lineHeight: '1.5rem',
	borderRadius: '.2rem',
	border: '1px solid #ced4da',
	width: '100%'
}

const styles = theme => ({
	errorField: {
		border: '1px solid #ee1d23',
		boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #ee1d23'
	}
})

DatePickerComponent.propTypes = {
	classes: PropTypes.objectOf(PropTypes.any).isRequired,
	label: PropTypes.string,
	needLabel: PropTypes.bool,
	placeholderNotLabel: PropTypes.bool,
	placeholder: PropTypes.string,
	type: PropTypes.string.isRequired,
	input: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default injectSheet(styles)(DatePickerComponent);