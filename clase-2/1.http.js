const http = require('node:http') // protocolo http

const desiredPort = process.env.PORT ?? 3000 // Puerto deseado

const server = http.createServer((req, res) => {
  console.log('request received ', req.url)
  res.end('Hello World')
})

server.listen(desiredPort, () => {
  console.log(`Server listening on port http://localhost:${server.address().port}`)
})
