/**
 * Created by Walter Suazo on 31/07/2015.
 */
var middleware= require('../servicios/middelware');
var validate, Joi;
validate = require('express-validation');
Joi = require('joi');
validation = require('./Validations');

exports=module.exports=function(app){

    //::::::::login:::::::::::::
    {
      app.get('/', require('../controlador/index').index);


      app.post('/login',validate(validation.login), require('../controlador/login').init)
    }

    //:::::usuarios:::::
    {
        app.get('/usuarios',middleware.ensureAuthenticated,require('../controlador/users').getUsers);
        app.post('/usuarios',middleware.ensureAuthenticated,validate(validation.usuarios.post),require('../controlador/users').crear);
        app.put('/usuarios',middleware.ensureAuthenticated,validate(validation.usuarios.put),require('../controlador/users').actualizar);
        app.delete('/usuarios',middleware.ensureAuthenticated,validate(validation.usuarios.delete),require('../controlador/users').borrar);

    }

    //::::::Roles:::::::::::
    {
      app.get('/roles',require('../controlador/roles').get);
      app.post('/roles',require('../controlador/roles').crear);
      app.put('/roles',validate(validation.roles),require('../controlador/roles').actualizar);
      app.delete('/roles',require('../controlador/roles').delete);
    }

    //::::::Buses:::::::::
    {
    app.get('/buses',middleware.ensureAuthenticated,require('../controlador/buses').get);
    app.post('/buses',middleware.ensureAuthenticated,validate(validation.buses.post),require('../controlador/buses').post);
    app.put('/buses',middleware.ensureAuthenticated,validate(validation.buses.put),require('../controlador/buses').update);
    app.delete('/buses',middleware.ensureAuthenticated,validate(validation.buses.delete),require('../controlador/buses').delete);

    }

    //::::::Rutas:::::::::
    {
      app.get('/rutas',middleware.ensureAuthenticated,require('../controlador/rutas').get);
      app.post('/rutas',middleware.ensureAuthenticated,validate(validation.rutas.post),require('../controlador/rutas').post);
      app.put('/rutas',middleware.ensureAuthenticated,validate(validation.rutas.put),require('../controlador/rutas').update);
      app.delete('/rutas',middleware.ensureAuthenticated,validate(validation.rutas.delete),require('../controlador/rutas').delete);
    }

    //::::::::horarios::::::::::::
  {
    app.get('/horarios',middleware.ensureAuthenticated,require('../controlador/horarios').get);
    app.post('/horarios',middleware.ensureAuthenticated,validate(validation.horarios.post),require('../controlador/horarios').post);
    app.put('/horarios',middleware.ensureAuthenticated,validate(validation.horarios.put),require('../controlador/horarios').update);
    app.delete('/horarios',middleware.ensureAuthenticated,validate(validation.horarios.delete),require('../controlador/horarios').delete);
  }

    //::::::::viajes::::::::::::
  {
    app.get('/viajes',middleware.ensureAuthenticated,require('../controlador/viajes').get);
    app.post('/viajes',middleware.ensureAuthenticated,validate(validation.viajes.post),require('../controlador/viajes').post);
    app.put('/viajes',middleware.ensureAuthenticated,validate(validation.viajes.put),require('../controlador/viajes').update);
    app.delete('/viajes',middleware.ensureAuthenticated,validate(validation.viajes.delete),require('../controlador/viajes').delete);
  }

  //:::::::::geocercas::::::::::::::
  {
    app.get('/geocercas',middleware.ensureAuthenticated,require('../controlador/geocercas').get);
    app.post('/geocercas',middleware.ensureAuthenticated,validate(validation.geocercas.post),require('../controlador/geocercas').post);
    app.put('/geocercas',middleware.ensureAuthenticated,validate(validation.geocercas.put),require('../controlador/geocercas').update);
    app.delete('/geocercas',middleware.ensureAuthenticated,validate(validation.geocercas.delete),require('../controlador/geocercas').delete);
  }

}


