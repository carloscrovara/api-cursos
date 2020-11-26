# api-cursos
Api de Listado de Cursos 


# Funcionalidad: 

- Mostrar Cursos
- Mostrar un curso
- Crear un curso
- Editar un curso
- Borrar un curso


# Estructura:

- Index: LLamado a paquetes(express, body-parser, nodemon), configuración express, body-parser, llamado a rutas y puerto de escucha del server.
- rutas(cursosRoutes.js): Rutas de mi api
- Cotrolador(cursosController.js): acciones(acciones de CRUD) de mi api
- Modelo(cursosModel): Representar a base de datos, al no ser persistente(sin base de datos), solo vamos a tener un array de objetos.