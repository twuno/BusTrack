/**
 * Created by Walter Suazo on 29/11/2015.
 */
var express = require('express');
var router = express.Router();
var moment = require('moment')
var rolesM = require('../modelos/Roles')

exports.get=function(req,res)
{
  rolesM.get(function(err,row)
  {
    if(err)
    {
      res.sendStatus(500);
    }else
    {
      res.send(row);
    }
  });
}

exports.crear=function(req,res)
{
  data={
    Descripcion:req.body.descripcion
  }


  rolesM.post(data,function(err,val){
    if(err)
    {
      console.log(err);
      res.sendStatus(500);
    }else{
      res.sendStatus(200);
    }
  });
}

exports.actualizar=function(req,res)
{
  data={}
  if(!req.body.descripcion){}else
  {
    data['Descripcion']=req.body.descripcion;
  }
  id = req.body.id;

  if (data.length<1){
    res.sendStatus(200);
  }else
  {
    rolesM.update(id,data,function(err,data){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }else
      {
        res.sendStatus(200);
      }
    });
  }
}

exports.delete=function(req,res){
  id = req.body.id;
  rolesM.delete(id,function(err,data){
    if(err){
      res.sendStatus(500);
    }else{
      res.sendStatus(200);
    }

  });
}

