/**
 * Created by GMG on 14/08/2015.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
exports.rastreo = function(req, res, next)
{

    res.render('rastreo', { title: 'RASTREO' });
}
