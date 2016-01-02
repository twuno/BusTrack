/**
 * Created by Walter Suazo on 29/12/2015.
 */
Joi=require('joi');

module.exports.put={body:{ id:Joi.number().positive().required()}}
