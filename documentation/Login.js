/**
 * Created by Walter Suazo on 21/01/2016.
 */
/**
 * @api {post} /login/ Iniciar Sesion.
 * @apiVersion 0.1.0
 * @apiName PostLogin
 * @apiGroup Login
 *
 * @apiParam {String} username Correo electronico del usuario.
 * @apiParam {String} password Contraseña del usuario.
 *
 *
 * @apiSuccess {String} Title  Nombre aplicacion.
 * @apiSuccess {String} Token   Token para hacer request.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "Title": "Bustrack",
 *       "Token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0NTM0Mzg"
 *     }
 *
 * @apiError Error Sin acceso.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Sin Acceso"
 *     }
 */
