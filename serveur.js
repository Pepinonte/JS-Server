const net = require("net");

const server = net.createServer();

server.on("connection", function (socket) {
  console.log("Fichier XML:");

  socket.on("data", function (d) {
    console.log("%s", d);
    // socket.write('hello' + d);
  });
});

server.listen(9000, function () {
  console.log("server listening to truc");
});
