/**
 * Created by Walter Suazo on 05/01/2016.
 */
var express = require('express');
var router = express.Router();
var moment = require('moment')
var representateM = require('../modelos/Representante')

exports.get=function(req,res)
{
  representateM.get(function (error,data) {
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
  var  Nombre = req.body.nombre;
  var  correo = req.body.correo;
  var telefono= req.body.telefono;
  data =
  {
    Nombre:Nombre,
    Correo:correo,
    Telefono:telefono
  }

  representateM.post(data,function(error,data){
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
  var id = req.body.id;
  var data = {}
  if(typeof req.body.nombre ==="undefined"){}else
  {
    data['Nombre']=req.body.nombre;
  }
  if(typeof req.body.correo ==="undefined"){}else
  {
    data['Correo']=req.body.correo;
  }
  if(typeof req.body.telefono ==="undefined"){}else
  {
    data['Telefono']=req.body.telefono;
  }
  if (Object.keys(data).length<1)
  {
    res.sendStatus(400);
  }else
  {
    representateM.update(id,data,function(err,data)
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
  id = req.body.id;

  representateM.delete(id,function(err,data){
    if(err){

      res.sendStatus(500);
    }else
    {
      res.sendStatus(200);
    }
  });
}
