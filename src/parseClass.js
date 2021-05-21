class Parser {
  constructor(arr, i) {
    this.arr = arr;
    this.i = i;
  }

  parse() {
    const p1 = this.arr.toString().split(' ');
    // const p2 = p1.toString().split('.');
    const p2 = p1.toString().split(',');
    const da = p2[4].toString().split(':');
    p2.splice(4, 1);
    const dd = p2[8].toString().split(':');
    p2.splice(8, 1);
    const p3 = p2.toString().split('.');
    const p4 = `${p3},${da},${dd}`;
    const pf = p4.toString().split(',');
    pf.splice(1, 1);
    pf.splice(5, 1);
    pf.splice(9, 1);
    pf.splice(9, 1);
    pf.splice(9, 1);
    return pf;

    // const p4 = p3.toString().split(':');
    // const p5 = p4.toString().split(',');

    // if (this.i === 5) {
    //   p5.pop();
    //   p5.pop();
    //   p5.pop();
    //   p5.splice(1, 1);
    //   p5.splice(2, 1);

    //   return p1;
    // }
  }
}

module.exports = Parser;
