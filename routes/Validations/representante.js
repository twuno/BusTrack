/**
 * Created by Walter Suazo on 05/01/2016.
 */
Joi=require('joi');

module.exports.post=
{
  options: { allowUnknownBody: false,flatten : true },
  body: {
    nombre: Joi.string().required(),
    correo: Joi.string().required(),
    telefono: Joi.string().required()
  }
}

module.exports.put=
{
  options: { allowUnknownBody: false,flatten : true },
  body: {
    id:Joi.number().positive().required(),
    nombre: Joi.string().optional(),
    correo: Joi.string().optional(),
    telefono: Joi.string().optional()
  }
}

module.exports.delete=
{
  options: { allowUnknownBody: false,flatten : true },
  body: {
    id:Joi.number().positive().required()
  }
}
