var express = require('express');
var router = express.Router();

/* GET users listing. */

exports.getUsers=function(req,res){
  res.render('index');
}
