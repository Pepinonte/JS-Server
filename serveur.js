const net = require("net");

const server = net.createServer();

let arr = [];
let i = 0;
let parseData = [];

server.on("connection", function (socket) {
  console.log("Fichier XML:");

  socket.on("data", (d) => {
    arr.push(d);
    const e = arr[i].toString();

    const tailleArr = arr.length;
    const tailleE = e.length;
    const dataSplitDate = e.split(".");
    const dataSplitHeure = e.split(":");

    if ((i === 0) | (i === 2)) {
      parseData.push(dataSplitDate[0]);
      parseData.push(dataSplitDate[1]);
      parseData.push(dataSplitDate[2]);
    } else if ((i === 1) | (i == 3)) {
      parseData.push(dataSplitHeure[0]);
      parseData.push(dataSplitHeure[1]);
      parseData.push(dataSplitHeure[2]);
    }

    console.log(parseData);
    // socket.write('hello' + d);
    i++;
  });
});

server.listen(9000, function () {
  console.log("server listening to truc");
});
