/**
 * Created by Walter Suazo on 12/08/2015.
 */
var express = require('express')
var Router = express.Router();
var servicio = require('../servicios/servicios');
var userModel = require('../modelos/Login')

exports.init=function(req,res,next)
{
    console.log(req)
    var user = req.body.username;
    var pass= servicio.encriptar(req.body.password)

    userModel.getUser(user,pass,function(error,data){
        if(error){
            res.render('index');
        }else{
            tokencito = servicio.createToken(data[0]);
            res.render('main', { title: 'SarnosoTrack',token:JSON.stringify(tokencito)  } );
        }


    });

    res.render('')
}