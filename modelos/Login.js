/**
 * Created by Walter Suazo on 12/08/2015.
 */
var pool = require('./Conexion');
var userModel = {};
userModel.getUser = function(user,pass,callback){
    pool.getconnection(function (err, connection) {
        if(connection){
            query = 'Select * from Usuarios where usuario=' + connection.escape(user) + 'and clave =' + connection.escape(pass);
            connection.query(query,function(error,row){
               if(erro){
                   callback(error,null);

               }else{
                   callback(null,row);
               }
                connection.release();
            });
        }
    });
}
module.exports= userModel;
