import op from 'object-path';
import moment from "moment";

export const validate = (values) => {
	const errors = {};
	const {
		firstName,
		lastName,
		middleName,
		birthDate,
		sex,
		phone,
		email,
		email1
	} = op.get(values, 'content.policyHolder', {});

	if (!firstName) {
		op.set(errors, 'content.policyHolder.firstName', 'Поле обязательно для заполнения!');
	} else if (firstName.length < 2) {
		op.set(errors, 'content.policyHolder.firstName', 'Минимальная длина имени - 2 буквы!');
	}
	if (!lastName) {
		op.set(errors, 'content.policyHolder.lastName', 'Поле обязательно для заполнения!');
	} else if (lastName.length < 2) {
		op.set(errors, 'content.policyHolder.lastName', 'Минимальная длина фамилии - 2 буквы!');
	}
	if (!birthDate) {
		op.set(errors, 'content.policyHolder.birthDate', 'Поле обязательно для заполнения!');
	} else if ((moment().diff(birthDate.value, 'years')) < 18) {
		op.set(errors, 'content.policyHolder.birthDate', 'Минимальный возраст страхователя - 18 лет!');
	}

	return errors;
}