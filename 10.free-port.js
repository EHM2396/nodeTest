const net = require('node:net')

function findAvailablePort (desiredPort) { // Busca un puerto disponible
  return new Promise((resolve, reject) => { // Devuelve una promesa
    const server = net.createServer() // Crea un servidor
    //  Escuchando el puerto deseado
    server.listen(desiredPort, () => {
      const port = server.address().port // Obtiene el puerto asignado
      server.close(() => { // Cierra el servidor
        resolve(port) // Resuelve la promesa con el puerto disponible
      })
    })
    // Manejo de errores
    server.on('error', (error) => { // Maneja el error
      if (error.code === 'EADDRINUSE') { // Error de puerto ocupado
        findAvailablePort(0).then((port) => resolve(port)) // Busca otro puerto
      }
    })
  })
}

module.exports = { findAvailablePort }
