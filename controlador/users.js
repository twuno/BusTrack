var express = require('express');
var router = express.Router();
var moment = require('moment')
var userM = require('../modelos/Login')
var servicio = require('../servicios/servicios');


exports.get=function(req,res){
  res.render('index');
}


exports.getUsers=function(req,res,next) {
  userM.getAll(function (error, data) {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    } else {
        res.send(data);
      }
  });
}

exports.crear= function (req,res) {

  var usuario = req.body.usuario;
  var pass = servicio.encriptar(req.body.clave);
  var FK_RolId = (req.body.rol || 2);
  var fechaCaducidad = moment().add(1,'months').format();
  var Activo= 1;
  data =
  {
    PK_UsuarioId:0,
    usuario:usuario,
    pass:pass,
    FK_RolId:FK_RolId,
    fechaCaducidad:fechaCaducidad,
    Activo:Activo
  }

  userM.crear(data,function(err,row){
    if(err){
      res.sendStatus(500);
    }else
    {
      res.sendStatus(200);
    }
  });
}

exports.actualizar=function(req,res)
{
  data={}
  if (!req.body.usuario)
  {}else{
    data['usuario']=req.body.usuario;
  }
  if(!req.body.clave)
  {}else{
    data['pass']=req.body.clave;
  }
  if(!req.body.rol)
  {}else{
    data['FK_RolId']=req.body.rol;
  }
  if(!req.body.fecha)
  {}else{
    data['fechaCaducidad']=req.body.fecha;
  }
  if(typeof req.body.activo ==="undefined")
  {}else
  {
    data['Activo']=req.body.activo;
  }
  console.log(data);

  id = req.body.id;
  if(data.lenght>0){
  userM.update(id,data,function(err,resu){
    if(err)
    {
      console.log(err);
      res.sendStatus(500);
    }else
    {
      res.sendStatus(200);
    }
  });
  }else
  {
    res.sendStatus(200);
  }
}

exports.borrar=function(req,res)
{
  id = req.body.id;
  userM.borrar(id,function(err,data){
    if(err)
    {
      res.sendStatus(500);
    }else
    {
      res.sendStatus(200);
    }
  });
}
