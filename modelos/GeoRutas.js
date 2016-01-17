/**
 * Created by Walter Suazo on 03/01/2016.
 */
var pool = require('./Conexion');
var geoRutasModel = {};


geoRutasModel.get=function(callback)
{
  pool.getConnection(function (err, connection) {
    if(connection){
      query = 'select * from GeocercasRutas';
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


geoRutasModel.post=function(data,callback)
{
  pool.getConnection(function (err, connection) {
    if(connection){
      query = 'Insert into GeocercasRutas set ?';
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

geoRutasModel.update=function(id,data,callback)
{
  pool.getConnection(function(err,connection){
    if(connection){
      query="update GeocercasRutas set ? where PK_Id="+id;
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

geoRutasModel.delete=function(dato,callback)
{
  pool.getConnection(function (err,conn)
  {
    if(conn){
      query="delete from GeocercasRutas where FK_GeocercaId="+dato.FK_GeocercaId+" and FK_RutaId="+dato.FK_RutaId+" and Posicion="+dato.Posicion;
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

module.exports= geoRutasModel;
