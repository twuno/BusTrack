/**
 * Created by Walter Suazo on 30/12/2015.
 */


var pool = require('./Conexion');

var geocercasModel = {};


geocercasModel.get=function(callback)
{
  pool.getConnection(function (err, connection) {
    if(connection){
      query = 'select PK_GeocercaId id,Nombre   geoJson from Geocercas';

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

geocercasModel.post=function(data,callback)
{
  pool.getConnection(function (err, connection) {
    if(connection){
      query = 'Insert into Geocercas set ?';
      connection.query(query,data,function(error,row){
        connection.release();
        if(error){
          callback(error,null);

        }else{
          //almacenar en mongo la geocerca
          callback(null,row);
        }

      });
    }else
    {
      callback('No se puede conectar',null);
    }
  });
}

geocercasModel.update=function(id,data,callback)
{
  pool.getConnection(function(err,connection){
    if(connection){
      query="update Geocercas set ? where PK_GeocercaId="+id;
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

geocercasModel.delete=function(id,callback)
{
  pool.getConnection(function (err,conn)
  {
    if(conn){
      query="delete from Geocercas where PK_GeocercaId="+id;
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

module.exports=geocercasModel ;
