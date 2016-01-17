/**
 * Created by Walter Suazo on 12/08/2015.
 */
var pool = require('./Conexion');
var userModel = {};

userModel.getUser = function(user,pass,callback){
    pool.getConnection(function (err, connection) {
        if(connection){
            query = 'Select PK_UsuarioId id,usuario,FK_RolId Rol, fechaCaducidad Caducado from Usuarios where usuario=' + connection.escape(user) + 'and pass ="' + (pass)+'";';
            connection.query(query,function(error,row){
            connection.release();
               if(error){
                   callback(error,null);

               }else{
                   callback(null,row);
               }

            });
        }
    });
}

userModel.getAll = function(callback){
    pool.getConnection(function (err, connection) {
        if(connection){
            query = 'Select PK_UsuarioId Id,usuario Usuario,r.Descripcion Rol,r.PK_RolId rol_id, fechaCaducidad Caducado,Activo from Usuarios u '+
          ' INNER JOIN Roles r on u.FK_RolId = r.PK_RolId;';

            connection.query(query,function(error,row){
                connection.release();
                if(error){
                    callback(error,null);
                }else{
                    callback(null,row);
                }

            });
        }
    });
}


userModel.crear = function(data,callback)
{
    pool.getConnection(function (err,conn) {
        if(conn){
            query = "insert into Usuarios set ?"
            conn.query(query,data,function(error,row){
            conn.release();
                if(error){
                    console.log(error);
                    callback(error,null);
                }else{
                    callback(null,row);
                }
            })
        }
    })
}


userModel.update=function(user,data,callback)
{

    pool.getConnection(function(err,conn){

        if(conn)
        {
        query="update Usuarios set ? where PK_UsuarioId="+user;
        console.log(conn.format(query,data))

        conn.query(query,data,function(error,row){
            if(error)
            {
                callback(error,null);
            }else
            {
                callback(null,row);
            }
        });

        }
    });
}

userModel.borrar=function(user,callback)
{
  pool.getConnection(function(error,conn){
  if(conn)
  {
    conn.query("delete from Usuarios where PK_UsuarioId="+user,function(err,row){
      if(err) {
        callback(err,null);
      }else
      {
        callback(null,row);
      }
    });

  }
});
}

module.exports= userModel;
