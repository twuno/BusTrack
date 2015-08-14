/**
 * Created by Walter Suazo on 12/08/2015.
 */
var express = require('express')
var Router = express.Router();
var servicio = require('../servicios/servicios');

var userM = require('../modelos/Login')

exports.init=function(req,res,next)
{

    var user = req.body.username;
    var pass= servicio.encriptar(req.body.password)

    userM.getUser(user,pass,function(error,data){
        if(error){

            res.render('index');
        }else{
            if (data.length>0){
                tokencito = servicio.createToken(data[0]);
                res.render('main', { title: 'BusTrack',token:JSON.stringify(tokencito)  } );
            }else
            {
                res.render('index');
            }

        }


    });


}