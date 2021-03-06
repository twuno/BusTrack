/**
 * Created by Walter Suazo on 21/07/2015.
 */
var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('./config');

exports.ensureAuthenticated = function(req, res, next) {
    if(!req.headers.authorization) {
        return res
            .status(403)
            .send({message: "Tu petici�n no tiene cabecera de autorizaci�n"});
    }

    var token = req.headers.authorization.split(" ")[0];

    var payload = jwt.decode(token, config.TOKEN_SECRET);
    now = moment().unix();
    if(payload.exp <= moment().unix()) {
        return res
            .status(401)
            .send({message: "El token ha expirado"});
    }
    req.userid=payload.userid;
    req.user = payload.sub;
    req.empresa = payload.emp;
    next();
}
