import joi from 'joi' ;

const deleteUserValidator = joi.object({
    id: joi.string().uuid().required(),
});
 export default deleteUserValidator;