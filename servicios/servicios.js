/**
 * Created by Walter Suazo on 21/07/2015.
 */
var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('./config');

exports.createToken = function(data) {
    var payload = {
        iat: moment().unix(),
        exp: moment().add(12, "hours").unix(),
        emp:data.FK_EmpresasId,
        sub: data.Usuario,
    };
    return jwt.encode(payload, config.TOKEN_SECRET);
};

exports.encriptar=function(data)
{
    return jwt.encode(data,config.TOKEN_SECRET);
}

exports.desencriptar=function(data)
{
    return jwt.decode(data,config.TOKEN_SECRET);
}