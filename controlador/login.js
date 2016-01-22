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
            console.log(error);
            res.sendStatus(500);
        }else{
            if (data.length>0){
                tokencito = servicio.createToken(data[0]);
                res.send({ title: 'BusTrack',token:tokencito});
            }else
            {
                console.log(data);
                res.send({error:"Sin acceso"});
            }
        }
    });


}
