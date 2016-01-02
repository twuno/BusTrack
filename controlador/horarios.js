/**
 * Created by Walter Suazo on 02/01/2016.
 */
var express = require('express');
var router = express.Router();
var moment = require('moment')
var horariosM = require('../modelos/Horarios')

exports.get=function(req,res)
{
  horariosM.get(function (error,data) {
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
  var  inicio= req.body.inicio;
  var  fin = req.body.fin;
  data =
  {
    Inicio:inicio,
    Fin:fin
  }

  horariosM.post(data,function(error,data){
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
  if(typeof req.body.inicio ==="undefined"){}else
  {
    data['Inicio']=req.body.inicio;
  }
  if(typeof req.body.fin ==="undefined"){}else
  {
    data['Fin']=req.body.fin;
  }
  if (Object.keys(data).length<1)
  {
    res.sendStatus(400);
  }else
  {
    horariosM.update(id,data,function(err,data)
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

  horariosM.delete(id,function(err,data){
    if(err){

      req.sendStatus(500);
    }else
    {
      res.sendStatus(200);
    }
  });
}
