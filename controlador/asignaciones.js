/**
 * Created by Walter Suazo on 07/01/2016.
 */


var express = require('express');
var router = express.Router();
var moment = require('moment')
var asignacionM = require('../modelos/Asignaciones')

exports.get=function(req,res)
{
  asignacionM.get(function (error,data) {
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
  var bus= req.body.bus;
  var  viaje = req.body.viaje;
  data =
  {
    FK_BusId:bus,
    FK_ViajesId:viaje
  }

  asignacionM.post(data,function(error,dato){
    if(error)
    {console.log(error);
      res.sendStatus(500);
    }else
    {
      data['FK_UsuarioId']=req.userid;
      f=new Date();
      data['fecha']= f.toLocaleString();

      asignacionM.postL(data,function(err,data)
      {
      if(err){console.log(err);}
      });
      res.sendStatus(200);
    }
  });
};

exports.update = function(req,res)
{
  var bus = req.body.bus;
  var viaje=req.body.viaje;
  asignacionM.update(bus,viaje,function(err,data)
    {
      if(err)
      {console.log(err);
        res.sendStatus(500);
      }
      else{res.sendStatus(200);
      }
    });

}

exports.delete = function(req,res)
{
  cuenta = req.body.bus;

  asignacionM.delete(cuenta,function(err,data){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else
    {
      res.sendStatus(200);
    }
  });
}
