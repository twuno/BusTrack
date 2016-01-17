/**
 * Created by Walter Suazo on 29/11/2015.
 */
var pool = require('./Conexion');
var rolesModel = {};


rolesModel.get=function(callback)
{
  pool.getConnection(function (err, connection) {
    if(connection){
      query = 'select PK_RolId rol_id,Descripcion rol from Roles';
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


rolesModel.post=function(data,callback)
{
  pool.getConnection(function (err, connection) {
    if(connection){
      query = 'Insert into Roles set ?';
      connection.query(query,data,function(error,row){
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

rolesModel.update=function(id,data,callback)
{
  pool.getConnection(function(err,connection){
    if(connection){
      query="update Roles set ? where PK_RolId="+id;
      connection.query(query,data,function(error,row)
      {
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

rolesModel.delete=function(id,callback)
{
  pool.getConnection(function (err,conn)
  {
    if(conn){
      query="delete from Roles where PK_RolId="+id;
      conn.query(query,function(error,data){
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

module.exports= rolesModel;
