/**
 * Created by Walter Suazo on 31/07/2015.
 */

exports=module.exports=function(app){
    app.get('/',require('../controlador/index').index);
    app.get('/usuarios',require('../controlador/users').getUsers);
    app.post('/login',require('../controlador/login').init);
    app.get('/Rastreo',require('../controlador/render').rastreo);

}
