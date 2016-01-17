/**
 * Created by Walter Suazo on 03/01/2016.
 */
var express = require('express');
var router = express.Router();
var moment = require('moment')
var geoRutasM = require('../modelos/GeoRutas')

exports.get=function(req,res)
{
  geoRutasM.get(function (error,data) {
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
  var ruta= req.body.ruta;
  var  geocerca = req.body.geocerca;
  var  posicion = req.body.posicion;
  data =
  {
    FK_RutaId:ruta,
    FK_GeocercaId:geocerca,
    Posicion:posicion
  }

  geoRutasM.post(data,function(error,data){
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
    geoRutasM.update(id,data,function(err,data)
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
  var ruta= req.body.ruta;
  var  geocerca = req.body.geocerca;
  var  posicion = req.body.posicion;
  data =
  {
    FK_RutaId:ruta,
    FK_GeocercaId:geocerca,
    Posicion:posicion
  }

  geoRutasM.delete(data,function(error,data){
    if(error)
    {console.log(error);
      res.sendStatus(500);
    }else
    {
      res.sendStatus(200);
    }
  });
}
