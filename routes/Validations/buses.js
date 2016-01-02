/**
 * Created by Walter Suazo on 02/01/2016.
 */
Joi=require('joi');

module.exports.post=
{
  options: { allowUnknownBody: false,flatten : true },
  body: {
    device: Joi.number().required(),
    descripcion: Joi.string().required()
  }
}

module.exports.put=
{
  options: { allowUnknownBody: false,flatten : true },
  body: {
    id:Joi.number().positive().required(),
    device: Joi.number().optional(),
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
