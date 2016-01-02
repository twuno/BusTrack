/**
 * Created by Walter Suazo on 28/12/2015.
 */
var pool = require('./Conexion');
var rutasModel = {};


rutasModel.get=function(callback)
{
  pool.getConnection(function (err, connection) {
    if(connection){
      query = 'select * from Rutas';
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


rutasModel.post=function(data,callback)
{
  pool.getConnection(function (err, connection) {
    if(connection){
      query = 'Insert into Rutas set ?';
      connection.query(query,data,function(error,row){
        connection.release();
        if(error){
          callback(error,null);

        }else{
          callback(null,row);
        }

      });
    }else
    {
      callback('No se puede conectar',null);
    }
  });
}

rutasModel.update=function(id,data,callback)
{
  pool.getConnection(function(err,connection){
    if(connection){
      query="update Rutas set ? where PK_RutasId="+id;
      connection.query(query,data,function(error,row)
      {
        connection.release();
        if(error){
          callback(error,null);
        }else
        {
          callback(null,row);
        }
      });
    }
  });
}


rutasModel.delete=function(id,callback)
{
  pool.getConnection(function (err,conn)
  {
    if(conn){
      query="delete from Rutas where PK_RutasId="+id;
      conn.query(query,function(error,data){
          conn.release();
          if(error){
            callback(error,null);}
          else{
            callback(null,data);
          }
        }
      );
    }

  });
}

module.exports= rutasModel;
