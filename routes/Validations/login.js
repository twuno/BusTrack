/**
 * Created by Walter Suazo on 29/12/2015.
 */

var Joi = require('joi');

module.exports = {
  options: { allowUnknownBody: false,flatten : true },
  body: {
    username: Joi.string().email().required(),
    password: Joi.string().required()
  }
};
