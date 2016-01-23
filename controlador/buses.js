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
      res.send({msg:false});
    }else
    {
      res.send({msg:true,info:data,count:data.length});
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
      res.sendStatus({msg:false,error:error.code});
    }else
    {
      res.sendStatus({msg:true});
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
        res.send({msg:false});
      }
      else{res.send({msg:true});
      }
    });
  }
}

exports.delete = function(req,res)
{
  id = req.body.id;

  busesM.delete(id,function(err,data){
    if(err){
      res.send({msg:false, error:err.code});
    }else
    {
      res.send({msg:true});
    }
  });
}
