/**
 * Created by Walter Suazo on 28/12/2015.
 */
var express = require('express');
var router = express.Router();
var moment = require('moment')
var rutasM = require('../modelos/Rutas')

exports.get=function(req,res)
{
  rutasM.get(function (error,data) {
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
  var  Descripcion = req.body.descripcion;
  var Nombre = req.body.nombre;
  data =
  {
    descripcion:Descripcion,
    nombre:Nombre
  }

  rutasM.post(data,function(error,data){
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
  if(typeof req.body.descripcion=== "undefined"){}else
  {
    data['descripcion']=req.body.descripcion;
  }
  if(typeof req.body.nombre=== "undefined"){}else
  {
    data['nombre']=req.body.nombre;
  }
  if (Object.keys(data).length.length<1)
  {
    res.sendStatus(200);
  }else
  {
    rutasM.update(id,data,function(err,data)
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

  rutasM.delete(id,function(err){
    if(err){

      res.sendStatus(500);
    }else
    {
      res.sendStatus(200);
    }
  });
}
