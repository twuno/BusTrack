/**
 * Created by Walter Suazo on 16/01/2016.
 */
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var mongoUrl="mongodb://terwalito2:Shersept03@ds047355.mongolab.com:47355/bustrack";
var db;

exports.connect = function(callback) {
  MongoClient.connect(mongoUrl, function(err, database) {
    if( err )
    {
      console.log(err);
      throw err;
    }
    db = database;
    callback();
  });
}

exports.doSomethingWithDatabase = function(callback){
  // this is using the same db connection
  var collection = db.collection('geocercas');
  collection.find({}).toArray(function(err, docs) {
    // do something
    if(err)
    {
      console.log(err);
    }else {
      callback(docs);
    }
  });
};

exports.crear = function(data,callback){
  // this is using the same db connection
  var collection = db.collection('geocercas');
  var datos = {
    id: data.id,
    geometry: data.Puntos,
    type: "Feature",
    properties: {
      nombre: data.Nombre
    }
  }
  collection.insertOne(
    datos
  ,function(err, docs) {
    // do something
    if(err)
    {
      console.log(err);
      callback(err,null);
    }else {
      callback(null,docs);
    }
  });
};
