const yup = require('yup');

module.exports.PERSON_VALIDATION_SCHEMA = yup.object().shape({
	full_name: yup.string().trim().min(1).max(30).required(),
	birth_year: yup.date(),
	// death_year: yup.date(),
});


