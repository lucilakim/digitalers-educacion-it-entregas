// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})



/* 

Peticiones al servidor

0. Obtener todos los usuarios.
1. Obtener un user particular
2. Crear un nuevo usuario que no exista
3. Modificar un usuario
4. Eliminar un usuario

*/