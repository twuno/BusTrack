/**
 * Created by Walter Suazo on 12/08/2015.
*/



var mysql = require('mysql'),

    pool = mysql.createPool({
        host:'131.161.52.171',
        user:'local',
        password:'l0c4lpass',
        database:'Buses',
        dateStrings:'date',
        connectionLimit:100
    })
module.exports=pool;



/*
var mysql = require('mysql'),
    pool = mysql.createPool({
        host:'honduras.ca6zya7z3wxn.us-west-2.rds.amazonaws.com',
        user:'Master',
        password:'H0ndu.gps!',
        database:'Buses',
        dateStrings:'date'
    })
module.exports=pool;

//renombrando archivo
/*
var mysql = require('mysql'),
  pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'probit2013',
    database:'Bustrack',
    dateStrings:'date',
    connectionLimit:100
  })

module.exports=pool;
 */
