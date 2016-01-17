/**
 * Created by Walter Suazo on 07/01/2016.
 */

var pool = require('./Conexion');
var asignacionModel = {};


asignacionModel.get=function(callback)
{
  pool.getConnection(function (err, connection) {
    if(connection){
        query = "SELECT b.Descripcion Bus, r.Nombre Viaje,r.Descripcion detalle, h.Inicio desde, h.Fin hasta,v.PK_ViajeId viaje_id, b.PK_BusId bus_id " +
          " FROM Asignaciones a INNER JOIN Viajes v ON a.FK_ViajesId = v.PK_ViajeId" +
          " INNER JOIN Buses b ON b.PK_BusId = a.FK_BusId" +
          " inner join Rutas r on r.PK_RutasId = v.FK_RutaId" +
          " inner JOIN Horarios h on h.PK_HorariosId = v.FK_HorarioId";
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



asignacionModel.post=function(data,callback)
{
  pool.getConnection(function (err, connection) {
    if(connection){
      query = 'Insert into Asignaciones set ? ON DUPLICATE KEY UPDATE FK_ViajesId='+data.FK_ViajesId;
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



asignacionModel.update=function(bus,viaje,callback)
{
  pool.getConnection(function(err,connection){
    if(connection){
      query="update Asignaciones set FK_ViajesId="+viaje+" where FK_BusId="+bus;
      connection.query(query,viaje,function(error,row)
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


asignacionModel.delete=function(bus,callback)
{
  pool.getConnection(function (err,conn)
  {
    if(conn){
      query="delete from Asignaciones where FK_BusId="+bus;
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

asignacionModel.postL=function(data,callback)
{
  pool.getConnection(function (err, connection) {
    if(connection){
      query = 'Insert into LogAsignacion set ?';

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


module.exports= asignacionModel;
