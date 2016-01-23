/**
 * Created by Walter Suazo on 21/01/2016.
 */

/**
 * @api {get} /alumnos/ Obtener Alumnos
 ** @apiVersion 0.1.0
 * @apiName getAlumnons
 * @apiGroup Alumnos
 *
 *@apiHeader {string} Authorization token de autenticacion de usuario
 *  @apiHeaderExample {json} Ejemplo Header:
 *  { "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0NTM0Mzg" }
 *
 *@apiSuccess {Object[]} Usuario  Lista de Usuarios.
 * @apiSuccess {Number} Usuario.Cuenta Cuenta del alumno.
 * @apiSuccess {Numbre} Usuario.Huella Huella del alumno
 * @apiSuccess {String} Usuario.Nombre Nombre del usuario
 * @apiSuccess {String} Usuario.Correo Correo del usuario
 * @apiSuccess {Number} Usuario.FK_RepresentanteId Codigo del Representante.
 *
 * @apiSuccessExample Resultado:
 *     HTTP/1.1 200 OK
 *[
 *{
 *  "Cuenta": 20821006,
 *  "Huella": 1,
 *  "Nombre": "Walter Leonel Suazo Urbina",
 *  "Correo": "waltersuazo2002gmail.com",
 *  "FK_RepresentanteId": 4
 *}
 *]
 *
 * @apiError Error Sin acceso.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Forbiden
 *     {
 *       "error": "Sin Acceso"
 *     }
 */

/**
 * @api {put} /alumnos/ Modificar Alumnos
 ** @apiVersion 0.1.0
 * @apiName putAlumnos
 * @apiGroup Alumnos
 *
 *@apiHeader {string} Authorization token de autenticacion de usuario
 *
 * @apiParam {Numero} cuenta cuenta del Alumno.
 * @apiParam {Numero} [codigo] Huella del Alumno.
 * @apiParam {String} [nombre] nombre del Alumno.
 * @apiParam {String} [correo] correo del rol del Alumno.
 * @apiParam {Numero} [representante] representante del Alumno.
 *
 *
 *
 *
 * @apiSuccessExample Respuesta:
 *     HTTP/1.1 200 OK
 *
 *
 *
 * @apiError Error Sin acceso.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Forbiden
 *     {
 *       "error": "Sin Acceso"
 *     }
 */

/**
 * @api {delete} /alumnos/ Eliminar Alumnos
 ** @apiVersion 0.1.0
 * @apiName deleteAlumnos
 * @apiGroup Alumnos
 *
 *@apiHeader {string} Authorization token de autenticacion de usuario
 *
 * @apiParam {Numero} id del Alumno.
 *
 *
 *
 *
 * @apiSuccessExample Respuesta:
 *     HTTP/1.1 200 OK
 *
 *
 *
 * @apiError Error Sin acceso.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Forbiden
 *     {
 *       "error": "Sin Acceso"
 *     }
 */

/**
 * @api {post} /alumnos/ Crear Alumnos
 ** @apiVersion 0.1.0
 * @apiName postAlumnos
 * @apiGroup Alumnos
 *
 *@apiHeader {string} Authorization token de autenticacion de usuario
 *
 * @apiParam {Numero} cuenta correo del Alumno.
 * @apiParam {Numero} codigo codigo del Alumno.
 * @apiParam {String} nombre nombre del Alumno.
 * @apiParam {String} correo correo del Alumno.
 * @apiParam {Numero} representante representante del Alumno.
 *
 *
 *
 *
 * @apiSuccessExample Respuesta:
 *     HTTP/1.1 200 OK
 *
 *
 *
 * @apiError Error Sin acceso.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Forbiden
 *     {
 *       "error": "Sin Acceso"
 *     }
 */
