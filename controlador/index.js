var express = require('express');
var router = express.Router();

/* GET home page. */
exports.index = function(req, res, next)
{
  //console.log('index');
  res.render('index', { title: 'Control de Buses' });
}
