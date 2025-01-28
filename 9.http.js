const http = require('node:http')
const { findAvailablePort } = require('./10.free-port.js')

const desiredPort = process.env.PORT ?? 3000 // Puerto deseado

console.log(process.env)

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hello World')
})

// Escucha un puerto disponible
findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    // obtengo la direccion del servidor
    console.log(`Server listening on port http://localhost:${server.address().port}`)
  })
})
