// const createError = require('http-errors');
const {PERSON_VALIDATION_SCHEMA }= require('../utils/validationSchemas')

module.exports.validatePerson = async (req, res, next) => {
	const { body } = req;

  // ASYNC-AWAIT
  try {
    const validatedPerson = await PERSON_VALIDATION_SCHEMA
                          .validate(body, {abortEarly: false});
    req.body = validatedPerson;
    next();
  } catch (error) {
    next(`Error is: ${error.errors}, ${error.name}`);
  }


  
  // isValid
  /* if(await PERSON_VALIDATION_SCHEMA.isValid(body)){
    return next();
  }
  next(createError(500, 'Server error' )) */

// Promise
  /* PERSON_VALIDATION_SCHEMA.validate(body, 
    {abortEarly: false})
  .then((validatedPerson) => {
    req.body = validatedPerson;
    next();
  })
  .catch((error) => {
    // res.status(500).send(error.errors);
    next(`Error is: ${error.errors}, ${error.name}`);
  }) */
};
