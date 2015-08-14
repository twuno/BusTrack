/**
 * Created by Walter Suazo on 12/08/2015.
 */
var mysql = require('mysql'),
    pool = mysql.createPool({
        host:'131.161.52.171',
        user:'local',
        password:'l0c4lpass',
        database:'Buses',
        dateStrings:'date'
    })
module.exports=pool;
//renombrando archivo