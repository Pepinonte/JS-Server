const net = require('net')

const server = net.createServer()

server.on('connection', function (socket) {
  console.log('new client')

  socket.on('data', function (d) {
    console.log('data: %s', d)
    socket.write('hello' + d);
  })
})

server.listen(9000, function () {
  console.log('server listening to truc')
})
