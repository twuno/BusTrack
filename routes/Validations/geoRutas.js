/**
 * Created by Walter Suazo on 03/01/2016.
 */
Joi=require('joi');

module.exports.post=
{
  options: { allowUnknownBody: false,flatten : true },
  body: {
    ruta: Joi.number().required(),
    geocerca: Joi.number().required(),
    posicion: Joi.number().required()
  }
}

module.exports.put=
{
  options: { allowUnknownBody: false,flatten : true },
  body: {
    geocerca:Joi.number().positive().required(),
    ruta: Joi.number().positive().optional(),
    posicion: Joi.number().positive().optional()
  }
}

module.exports.delete=
{
  options: { allowUnknownBody: false,flatten : true },
  body: {
    ruta: Joi.number().required(),
    geocerca: Joi.number().required(),
    posicion: Joi.number().required()
  }
}
