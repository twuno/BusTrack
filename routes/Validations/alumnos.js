/**
 * Created by Walter Suazo on 05/01/2016.
 */
Joi=require('joi');



module.exports.post=
{
  options: { allowUnknownBody: false,flatten : true },
  body: {
    cuenta:Joi.number().required(),
    codigo:Joi.number().required(),
    nombre: Joi.string().required(),
    correo: Joi.string().required(),
    representante: Joi.number().required()
  }
}

module.exports.put=
{
  options: { allowUnknownBody: false,flatten : true },
  body: {
    cuenta:Joi.number().positive().required(),
    codigo:Joi.number().optional(),
    nombre: Joi.string().optional(),
    correo: Joi.string().optional(),
    representante: Joi.number().optional()
  }
}

module.exports.delete=
{
  options: { allowUnknownBody: false,flatten : true },
  body: {
    cuenta:Joi.number().positive().required()
  }
}
