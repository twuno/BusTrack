/**
 * Created by Walter Suazo on 05/01/2016.
 */

var express = require('express');
var router = express.Router();
var moment = require('moment')
var alumnoM = require('../modelos/Alumnos')

exports.get=function(req,res)
{
  alumnoM.get(function (error,data) {
    if(error)
    {
      console.log(error);
      res.sendStatus(500);
    }else
    {
      res.send(data);
    }
  })
}

exports.post=function(req,res){
  var cuenta= req.body.cuenta;
  var  Nombre = req.body.nombre;
  var  correo = req.body.correo;
  var codigo= req.body.codigo;
  var representante=req.body.representante;
  data =
  {
    Cuenta:cuenta,
    Huella:codigo,
    Nombre:Nombre,
    Correo:correo,
    FK_RepresentanteId:representante
  }

  alumnoM.post(data,function(error,data){
    if(error)
    {console.log(error);
      res.sendStatus(500);
    }else
    {
      res.sendStatus(200);
    }
  });
};

exports.update = function(req,res)
{
  var id = req.body.cuenta;
  var data = {}
  if(typeof req.body.codigo ==="undefined"){}else
  {
    data['Huella']=req.body.codigo;
  }
 if(typeof req.body.nombre ==="undefined"){}else
  {
    data['Nombre']=req.body.nombre;
  }
  if(typeof req.body.correo ==="undefined"){}else
  {
    data['Correo']=req.body.correo;
  }
  if(typeof req.body.representante ==="undefined"){}else
  {
    data['FK_RepresentanteId']=req.body.representante;
  }
  if (Object.keys(data).length<1)
  {
    res.sendStatus(400);
  }else
  {
    alumnoM.update(id,data,function(err,data)
    {
      if(err)
      {console.log(err);
        res.sendStatus(500);
      }
      else{res.sendStatus(200);
      }
    });
  }
}

exports.delete = function(req,res)
{
  cuenta = req.body.cuenta;

  alumnoM.delete(cuenta,function(err,data){
    if(err){

      res.sendStatus(500);
    }else
    {
      res.sendStatus(200);
    }
  });
}
