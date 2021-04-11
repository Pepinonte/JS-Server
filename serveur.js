const net = require("net");

const server = net.createServer();

let arr = [];
let i = 0;
let e = [];
let finalParse = [];

server.on("connection", function (socket) {
  console.log("Fichier XML:");

  socket.on("data", (d) => {
    arr.push(d);
    e.push(arr[i].toString());
    const p1 = e.toString().split(" ");
    const p2 = p1.toString().split(".");
    const p3 = p2.toString().split(",");
    const p4 = p3.toString().split(":");
    const p5 = p4.toString().split(",");

    if (i == 5) {
      p5.pop();
      p5.pop();
      p5.pop();
      p5.splice(1, 1);
      p5.splice(2, 1);
      finalParse = p5;
      console.log(e);
      console.log(finalParse);
    }
    // // socket.write('hello' + d);
    i++;
  });
});

server.listen(9000, function () {
  console.log("server listening to truc");
});
