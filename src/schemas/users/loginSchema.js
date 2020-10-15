const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.string()
        .email()
        .min(5)
        .max(50)
        .required(),
    password: Joi.string()
        .min(5)
        .max(30)
        .required()
});

module.exports = loginSchema;