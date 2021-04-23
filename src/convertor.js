const net = require('net');
const Obj = require('./parseClass');

let finalParse = [];

const server = net.createServer();

server.on('connection', (socket) => {
  console.log('Fichier XML:');

  let i = 0;
  const arr = [];
  const e = [];

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

const test = {
  jourD: finalParse[2],
  moisD: finalParse[1],
  anneeD: finalParse[3],
  heureD: finalParse[4],
  minD: finalParse[5],
  secD: finalParse[6],
  jourF: finalParse[11],
  moisF: finalParse[9],
  anneeF: finalParse[12],
  heureF: finalParse[13],
  minF: finalParse[14],
  secF: finalParse[15],
};

console.log(finalParse[2]);

module.exports = test;
