/**
 * Created by Walter Suazo on 03/01/2016.
 */
var express = require('express');
var router = express.Router();
var moment = require('moment')
var viajesM = require('../modelos/Viajes')

exports.get=function(req,res)
{
  viajesM.get(function (error,data) {
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
  var  ruta = req.body.ruta;
  var horario = req.body.horario;
  data =
  {
    FK_RutaId:ruta,
    FK_HorarioId:horario
  }

  viajesM.post(data,function(error,data){
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
  if(typeof req.body.ruta ==="undefined"){}else
  {
    data['FK_RutaId']=req.body.ruta;
  }
  if(typeof req.body.horario==="undefined"){}else
  {
    data['FK_HorarioId']=req.body.horario;
  }
  if (Object.keys(data).length<1)
  {
    res.sendStatus(200);
  }else
  {
    viajesM.update(id,data,function(err,data)
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

  viajesM.delete(id,function(err,data){
    if(err){
      console.log(err)
      res.sendStatus(500);
    }else
    {
      res.sendStatus(200);
    }
  });
}
