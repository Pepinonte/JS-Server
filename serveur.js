const net = require("net");
const server = net.createServer();

server.on("connection", function (socket) {
  console.log("Fichier XML:");

  let i = 0;
  let arr = [];
  let e = [];
  let finalParse = [];

  socket.on("data", (d) => {
    arr.push(d);
    e.push(arr[i].toString());

    const obj = require("./parseClass");
    const myObj = new obj(e, i);

    if (i == 5) {
      finalParse = myObj.parse();
      console.log(finalParse);
    }
    // // socket.write('hello' + d);
    i++;
  });
});

server.listen(9000, function () {
  console.log("server listening to truc");
});
