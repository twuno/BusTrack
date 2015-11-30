/**
 * Created by Walter Suazo on 31/07/2015.
 */
var middleware= require('../servicios/middelware');
var validate, Joi;
validate = require('express-validation');
Joi = require('joi');

exports=module.exports=function(app){
    app.get('/',require('../controlador/index').index);

    app.post('/login',require('../controlador/login').init)


    //:::::usuarios:::::
    {
        app.get('/usuarios',middleware.ensureAuthenticated,require('../controlador/users').getUsers);
        app.post('/usuarios',middleware.ensureAuthenticated,validate({body:{
                usuario:Joi.string().email().required(),
                clave:Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
                rol:Joi.number().positive()
            }
            }),require('../controlador/users').crear);
        app.put('/usuarios',middleware.ensureAuthenticated,validate({body:{ id:Joi.number().positive().required()}}),require('../controlador/users').actualizar);
        app.delete('/usuarios',validate({body:{ id:Joi.number().positive().required()}}),require('../controlador/users').borrar);

    }
    //::::::Roles:::::::::::
    {
      app.get('/roles',require('../controlador/roles').get);
      app.post('/roles',require('../controlador/roles').crear);
      app.put('/roles',validate({body:{ id:Joi.number().positive().required()}}),require('../controlador/roles').actualizar);
      app.delete('/roles',require('../controlador/roles').delete);
    }
  //::::::Buses:::::::::
  {
  app.get('/buses',require('../controlador/buses').get);
  }
}


/*{"system_time":
    "2015-11-30T11:08:47.089250-06:00",
        "code": 99,
    "vid": 86,
    "event_time": "2015-11-30T11:00:28-06:00",
    "event_type": 12,
    "ip": "201.190.46.108",
    "metric": 0,
    "lon": -8801264,
    "head": 35,
    "mph": 21, "port": 27974, "source": 3,
    "valid_position": true, "id": 4323065729, "lat": 1554596, "age": 2, "pid": 94, "device_id": 356612026179319}


{"head":269,"code": 0,"event_type": 11,"event_time":"2015-11-28T10:59:32-06:00","ip":"201.190.46.64","age": 2,"lon": -8800523,"system_time":"2015-11-28T10:59:33.470447-06:00","mph": 0,"io_ign": true,"id": 4323164245,"source": 3,"valid_position": true,"lat": 1550278,"port": 1989,"device_id": 356612026179319}
*/
