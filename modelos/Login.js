/**
 * Created by Walter Suazo on 12/08/2015.
 */
var pool = require('./Conexion');
var userModel = {};

userModel.getUser = function(user,pass,callback){
    pool.getConnection(function (err, connection) {
        if(connection){
            query = 'Select usuario,FK_RolId Rol, fechaCaducidad Caducado from Usuarios where usuario=' + connection.escape(user) + 'and pass ="' + (pass)+'";';
            connection.query(query,function(error,row){
               if(error){
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
