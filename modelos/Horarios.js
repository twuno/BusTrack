/**
 * Created by Walter Suazo on 02/01/2016.
 */
var pool = require('./Conexion');
var horariosModel = {};


horariosModel.get=function(callback)
{
  pool.getConnection(function (err, connection) {
    if(connection){
      query = 'select * from Horarios';
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


horariosModel.post=function(data,callback)
{
  pool.getConnection(function (err, connection) {
    if(connection){
      query = 'Insert into Horarios set ?';
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

horariosModel.update=function(id,data,callback)
{
  pool.getConnection(function(err,connection){
    if(connection){
      query="update Horarios set ? where PK_HorariosId="+id;
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

horariosModel.delete=function(id,callback)
{
  pool.getConnection(function (err,conn)
  {
    if(conn){
      query="delete from Horarios where PK_HorariosId="+id;
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

module.exports= horariosModel;
