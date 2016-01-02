/**
 * Created by Walter Suazo on 29/12/2015.
 */


var Joi = require('joi');

module.exports.post={
  options: { allowUnknownBody: false,flatten : true },
  body:{
  usuario:Joi.string().email().required(),
    clave:Joi.string().required(),
    rol:Joi.number().positive()
}
}

module.exports.put= {
  body:
  {
    id:Joi.number().positive().required()
  }
}

module.exports.delete=
{body:{ id:Joi.number().positive().required()}}
