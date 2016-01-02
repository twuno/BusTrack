/**
 * Created by Walter Suazo on 30/12/2015.
 */
Joi=require('joi');

module.exports.post=
{
  options: { allowUnknownBody: false,flatten : true },
  body: {
    nombre: Joi.string().required(),
    descripcion: Joi.string().required()
  }
}

module.exports.put=
{
  options: { allowUnknownBody: false,flatten : true },
  body: {
    id:Joi.number().positive().required(),
    nombre: Joi.string().optional(),
    descripcion: Joi.string().optional()
  }
}

module.exports.delete=
{
  options: { allowUnknownBody: false,flatten : true },
  body: {
    id:Joi.number().positive().required()
  }
}
