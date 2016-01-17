/**
 * Created by Walter Suazo on 05/01/2016.
 */

var pool = require('./Conexion');
var alumnoModel = {};


alumnoModel.get=function(callback)
{
  pool.getConnection(function (err, connection) {
    if(connection){
      query = 'select * from Alumnos';
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

alumnoModel.post=function(data,callback)
{
  pool.getConnection(function (err, connection) {
    if(connection){
      query = 'Insert into Alumnos set ?';
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

alumnoModel.update=function(id,data,callback)
{
  pool.getConnection(function(err,connection){
    if(connection){
      query="update Alumnos set ? where Cuenta="+id;
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

alumnoModel.delete=function(id,callback)
{
  pool.getConnection(function (err,conn)
  {
    if(conn){
      query="delete from Alumnos where Cuenta="+id;
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

module.exports= alumnoModel;
