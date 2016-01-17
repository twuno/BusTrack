/**
 * Created by Walter Suazo on 30/12/2015.
 */
var express = require('express');
var router = express.Router();
var moment = require('moment')
var geocercasM = require('../modelos/Geocercas')
var mongo= require('../modelos/Mongo')

exports.get=function(req,res)
{
  geocercasM.get(function (error,data) {
    if(error)
    {
      console.log(error);
      res.sendStatus(500);
    }else
    {
      mongo.doSomethingWithDatabase(function(data){
        console.log(data);
      });
      res.send(data);

    }
  })
}

exports.post=function(req,res){
  var  Nombre = req.body.nombre;
  var puntos = req.body.puntos;
  data =
  {
    Nombre:Nombre,
    Puntos:puntos
  }

  geocercasM.post(data,function(error,data){
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
  if(typeof req.body.puntos==="undefined"){}else
  {
    data['Puntos']=req.body.puntos;
  }
  if (Object.keys(data).length<1)
  {
    res.sendStatus(200);
  }else
  {
    geocercasM.update(id,data,function(err,data)
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

  geocercasM.delete(id,function(err,data){
    if(err){
      console.log(err)
      res.sendStatus(500);
    }else
    {
      res.sendStatus(200);
    }
  });
}
