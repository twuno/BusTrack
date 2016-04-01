define({ "api": [
  {
    "type": "delete",
    "url": "/alumnos/",
    "title": "Eliminar Alumnos",
    "version": "0.1.0",
    "name": "deleteAlumnos",
    "group": "Alumnos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token de autenticacion de usuario</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Numero",
            "optional": false,
            "field": "id",
            "description": "<p>del Alumno.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>Sin acceso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbiden\n{\n  \"error\": \"Sin Acceso\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documentation/Alumnos.js",
    "groupTitle": "Alumnos"
  },
  {
    "type": "get",
    "url": "/alumnos/",
    "title": "Obtener Alumnos",
    "version": "0.1.0",
    "name": "getAlumnons",
    "group": "Alumnos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token de autenticacion de usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Header:",
          "content": "{ \"Authorization\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0NTM0Mzg\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Usuario",
            "description": "<p>Lista de Usuarios.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Usuario.Cuenta",
            "description": "<p>Cuenta del alumno.</p>"
          },
          {
            "group": "Success 200",
            "type": "Numbre",
            "optional": false,
            "field": "Usuario.Huella",
            "description": "<p>Huella del alumno</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Usuario.Nombre",
            "description": "<p>Nombre del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Usuario.Correo",
            "description": "<p>Correo del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Usuario.FK_RepresentanteId",
            "description": "<p>Codigo del Representante.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Resultado:",
          "content": "    HTTP/1.1 200 OK\n[\n{\n \"Cuenta\": 20821006,\n \"Huella\": 1,\n \"Nombre\": \"Walter Leonel Suazo Urbina\",\n \"Correo\": \"waltersuazo2002gmail.com\",\n \"FK_RepresentanteId\": 4\n}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>Sin acceso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbiden\n{\n  \"error\": \"Sin Acceso\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documentation/Alumnos.js",
    "groupTitle": "Alumnos"
  },
  {
    "type": "post",
    "url": "/alumnos/",
    "title": "Crear Alumnos",
    "version": "0.1.0",
    "name": "postAlumnos",
    "group": "Alumnos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token de autenticacion de usuario</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Numero",
            "optional": false,
            "field": "cuenta",
            "description": "<p>correo del Alumno.</p>"
          },
          {
            "group": "Parameter",
            "type": "Numero",
            "optional": false,
            "field": "codigo",
            "description": "<p>codigo del Alumno.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre del Alumno.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "correo",
            "description": "<p>correo del Alumno.</p>"
          },
          {
            "group": "Parameter",
            "type": "Numero",
            "optional": false,
            "field": "representante",
            "description": "<p>representante del Alumno.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>Sin acceso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbiden\n{\n  \"error\": \"Sin Acceso\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documentation/Alumnos.js",
    "groupTitle": "Alumnos"
  },
  {
    "type": "put",
    "url": "/alumnos/",
    "title": "Modificar Alumnos",
    "version": "0.1.0",
    "name": "putAlumnos",
    "group": "Alumnos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token de autenticacion de usuario</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Numero",
            "optional": false,
            "field": "cuenta",
            "description": "<p>cuenta del Alumno.</p>"
          },
          {
            "group": "Parameter",
            "type": "Numero",
            "optional": true,
            "field": "codigo",
            "description": "<p>Huella del Alumno.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nombre",
            "description": "<p>nombre del Alumno.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "correo",
            "description": "<p>correo del rol del Alumno.</p>"
          },
          {
            "group": "Parameter",
            "type": "Numero",
            "optional": true,
            "field": "representante",
            "description": "<p>representante del Alumno.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>Sin acceso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbiden\n{\n  \"error\": \"Sin Acceso\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documentation/Alumnos.js",
    "groupTitle": "Alumnos"
  },
  {
    "type": "post",
    "url": "/login/",
    "title": "Iniciar Sesion.",
    "version": "0.1.0",
    "name": "PostLogin",
    "group": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Correo electronico del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña del usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Title",
            "description": "<p>Nombre aplicacion.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>Token para hacer request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"Title\": \"Bustrack\",\n  \"Token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0NTM0Mzg\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>Sin acceso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Sin Acceso\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documentation/Login.js",
    "groupTitle": "Login"
  },
  {
    "type": "delete",
    "url": "/user/",
    "title": "Eliminar Usuarios",
    "version": "0.1.0",
    "name": "deleteUsuario",
    "group": "Usuarios",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token de autenticacion de usuario</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Numero",
            "optional": false,
            "field": "id",
            "description": "<p>del usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>Sin acceso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbiden\n{\n  \"error\": \"Sin Acceso\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documentation/Usuarios.js",
    "groupTitle": "Usuarios"
  },
  {
    "type": "get",
    "url": "/user/",
    "title": "Obtener usuarios",
    "version": "0.1.0",
    "name": "getUsuario",
    "group": "Usuarios",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token de autenticacion de usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Header:",
          "content": "{ \"Authorization\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0NTM0Mzg\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Usuario",
            "description": "<p>Lista de Usuarios.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Usuario.Id",
            "description": "<p>Id del usuarios.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Usuario.Rol",
            "description": "<p>rol del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Usuario.Usuario",
            "description": "<p>Correo del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Usuario.rol_id",
            "description": "<p>Id del rol del usuarios.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Usuario.Caducado",
            "description": "<p>Fecha que caducara el acceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Usuario.Activo",
            "description": "<p>Estado del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n{\n  \"Id\": 1,\n  \"Usuario\": \"waltersuazo2002@unitec.edu\",\n  \"Rol\": \"Administrador\",\n  \"rol_id\": 1,\n  \"Caducado\": \"2015-08-26 22:11:06\",\n  \"Activo\": 1\n}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>Sin acceso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbiden\n{\n  \"error\": \"Sin Acceso\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documentation/Usuarios.js",
    "groupTitle": "Usuarios"
  },
  {
    "type": "post",
    "url": "/user/",
    "title": "Crear Usuarios",
    "version": "0.1.0",
    "name": "postUsuario",
    "group": "Usuarios",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token de autenticacion de usuario</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": "<p>correo del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clave",
            "description": "<p>clave del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "Numero",
            "optional": false,
            "field": "rol",
            "description": "<p>id del rol del usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>Sin acceso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbiden\n{\n  \"error\": \"Sin Acceso\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documentation/Usuarios.js",
    "groupTitle": "Usuarios"
  },
  {
    "type": "put",
    "url": "/user/",
    "title": "Modificar Usuarios",
    "version": "0.1.0",
    "name": "putUsuario",
    "group": "Usuarios",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token de autenticacion de usuario</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Numero",
            "optional": false,
            "field": "id",
            "description": "<p>Id del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "usuario",
            "description": "<p>correo del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "clave",
            "description": "<p>clave del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "Numero",
            "optional": true,
            "field": "rol",
            "description": "<p>id del rol del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "Fecha",
            "optional": true,
            "field": "Fecha",
            "description": "<p>Fecha del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "Numero",
            "optional": true,
            "field": "activo",
            "description": "<p>estado del usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>Sin acceso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbiden\n{\n  \"error\": \"Sin Acceso\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documentation/Usuarios.js",
    "groupTitle": "Usuarios"
  }
] });
