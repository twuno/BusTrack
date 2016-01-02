/**
 * Created by Walter Suazo on 03/12/2015.
 */
var express = require('express');
var router = express.Router();
var moment = require('moment')
var busesM = require('../modelos/Buses')

exports.get=function(req,res)
{
  busesM.get(function (error,data) {
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
  var  Device = req.body.device;
  data =
  {
    Descripcion:Descripcion,
    Device:Device
  }

  busesM.post(data,function(error,data){
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
  if(typeof req.body.descripcion ==="undefined"){}else
  {
    data['Descripcion']=req.body.descripcion;
  }
  if(typeof req.body.device ==="undefined"){}else
  {
    data['Device']=req.body.descripcion;
  }
  if (Object.keys(data).length<1)
  {
    res.sendStatus(400);
  }else
  {
    busesM.update(id,data,function(err,data)
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

  busesM.delete(id,function(err,data){
    if(err){

      req.sendStatus(500);
    }else
    {
      req.sendStatus(200);
    }
  });
}
