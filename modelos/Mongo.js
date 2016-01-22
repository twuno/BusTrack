/**
 * Created by Walter Suazo on 16/01/2016.
 */
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var mongoUrl="mongodb://terwalito:Shersept03@ds047355.mongolab.com:47355/bustrack";
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
  collection.insertOne(
    {
      id:data.id,
      geometry:data.puntos,
      type:"Feature",
      properties:{
        nombre:data.nombre
      }
    }
  ,function(err, docs) {
    // do something
    if(err)
    {
      console.log(err);
    }else {
      callback(docs);
    }
  });
};
