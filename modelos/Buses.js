/**
 * Created by Walter Suazo on 29/11/2015.
 */
/**
 * Created by Walter Suazo on 29/11/2015.
 */
var pool = require('./Conexion');
var busesModel = {};


busesModel.get=function(callback)
{
  pool.getConnection(function (err, connection) {
    if(connection){
      query = 'select * from Buses';
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


busesModel.post=function(data,callback)
{
  pool.getConnection(function (err, connection) {
    if(connection){
      query = 'Insert into Buses set ?';
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

busesModel.update=function(id,data,callback)
{
  pool.getConnection(function(err,connection){
    if(connection){
      query="update Buses set ? where PK_BusId="+id;
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

busesModel.delete=function(id,callback)
{
  pool.getConnection(function (err,conn)
  {
    if(conn){
      query="delete from Buses where PK_BusId="+id;
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

module.exports= busesModel;
