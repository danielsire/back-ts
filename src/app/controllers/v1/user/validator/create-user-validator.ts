import joi from 'joi' ;

const createUserValidator = joi.object({
    name: joi.string().min(4).max(500).required(),
    email: joi.string().min(4).max(250).required(),
    age: joi.number().integer().required()
});
 export default createUserValidator;