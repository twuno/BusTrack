/**
 * Created by Walter Suazo on 21/01/2016.
 */

/**
 * @api {get} /user/ Obtener usuarios
 ** @apiVersion 0.1.0
 * @apiName getUsuario
 * @apiGroup Usuarios
 *
 *@apiHeader {string} Authorization token de autenticacion de usuario
 *  @apiHeaderExample {json} Ejemplo Header:
 *  { "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0NTM0Mzg" }
 *
 *@apiSuccess {Object[]} Usuario  Lista de Usuarios.
 * @apiSuccess {Number} Usuario.Id Id del usuarios.
 * @apiSuccess {String} Usuario.Rol rol del usuario
 * @apiSuccess {String} Usuario.Usuario Correo del usuario
 * @apiSuccess {Number} Usuario.rol_id Id del rol del usuarios.
 * @apiSuccess {String} Usuario.Caducado Fecha que caducara el acceso.
 * @apiSuccess {Number} Usuario.Activo Estado del usuario.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *[
 * {
 *   "Id": 1,
 *   "Usuario": "waltersuazo2002@unitec.edu",
 *   "Rol": "Administrador",
 *   "rol_id": 1,
 *   "Caducado": "2015-08-26 22:11:06",
 *   "Activo": 1
 * }
 * ]
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
 * @api {put} /user/ Modificar Usuarios
 ** @apiVersion 0.1.0
 * @apiName putUsuario
 * @apiGroup Usuarios
 *
 *@apiHeader {string} Authorization token de autenticacion de usuario
 *
 * @apiParam {Numero} id Id del usuario.
 * @apiParam {String} [usuario] correo del usuario.
 * @apiParam {String} [clave] clave del usuario.
 * @apiParam {Numero} [rol] id del rol del usuario.
 * @apiParam {Fecha} [Fecha] Fecha del usuario.
 * @apiParam {Numero} [activo] estado del usuario.
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
 * @api {delete} /user/ Eliminar Usuarios
 ** @apiVersion 0.1.0
 * @apiName deleteUsuario
 * @apiGroup Usuarios
 *
 *@apiHeader {string} Authorization token de autenticacion de usuario
 *
  * @apiParam {Numero} id del usuario.
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
 * @api {post} /user/ Crear Usuarios
 ** @apiVersion 0.1.0
 * @apiName postUsuario
 * @apiGroup Usuarios
 *
 *@apiHeader {string} Authorization token de autenticacion de usuario
 *
 * @apiParam {String} usuario correo del usuario.
 * @apiParam {String} clave clave del usuario.
 * @apiParam {Numero} rol id del rol del usuario.
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
