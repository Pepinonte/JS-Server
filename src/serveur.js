const net = require('net');
const Obj = require('./parseClass');

const server = net.createServer();

server.on('connection', (socket) => {
  console.log('Fichier XML:');

  let i = 0;
  const arr = [];
  const e = [];
  let finalParse = [];

  socket.on('data', (d) => {
    arr.push(d);
    e.push(arr[i].toString());

    const myObj = new Obj(e, i);

    if (i === 5) {
      finalParse = myObj.parse();
      console.log(finalParse);
    }
    // // socket.write('hello' + d)
    i++;
  });
});

server.listen(9000, () => {
  console.log('server listening to truc');
});
// const conv = (data) => {
//   if (data === jour) {
//     return finalParse[0]
//   }
// }
