/**
 * Created by Walter Suazo on 02/01/2016.
 */
Joi=require('joi');

module.exports.post=
{
  options: { allowUnknownBody: false,flatten : true },
  body: {
    nombre: Joi.string().required(),
    puntos: Joi.object().keys({
      type:Joi.string(),
      coordinates:Joi.array().items(Joi.array().items(Joi.array().items(Joi.number()).length(2)))
    }).required()
  }
}

module.exports.put=
{
  options: { allowUnknownBody: false,flatten : true },
  body: {
    id:Joi.number().positive().required(),
    inicio: Joi.string().regex(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/).optional(),
    fin: Joi.string().regex(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/ ).optional()

  }
}

module.exports.delete=
{
  options: { allowUnknownBody: false,flatten : true },
  body: {
    id:Joi.number().positive().required()
  }
}
