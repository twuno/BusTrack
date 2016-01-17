/**
 * Created by Walter Suazo on 07/01/2016.
 */

Joi=require('joi');

module.exports.post=
{
  options: { allowUnknownBody: false,flatten : true },
  body: {
    bus: Joi.number().required(),
    viaje: Joi.number().required()
  }
}

module.exports.put=
{
  options: { allowUnknownBody: false,flatten : true },
  body: {
    bus: Joi.number().required(),
    viaje: Joi.number().required()
  }
}

module.exports.delete=
{
  options: { allowUnknownBody: false,flatten : true },
  body: {
    bus:Joi.number().positive().required()
  }
}
