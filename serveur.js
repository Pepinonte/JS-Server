const net = require("net");

const server = net.createServer();

let arr = [];

server.on("connection", function (socket) {
  console.log("Fichier XML:");

  socket.on("data", (d) => {
    let i = 0;
    arr.push(d);
    const e = arr[i].toString();

    i++;

    const tailleArr = arr.length;
    const tailleE = e.length;
    const dataSplit = e.split(".");

    // socket.write('hello' + d);
    // console.log(dataSplit[0])
  });
});

server.listen(9000, function () {
  console.log("server listening to truc");
});
