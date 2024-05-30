import joi from 'joi' ;

const updateUserValidator = joi.object({
    id: joi.string().uuid().required(),
    name: joi.string().min(4).max(500).required(),
    email: joi.string().min(4).max(250).required(),
    age: joi.number().integer().required()
});
 export default updateUserValidator;