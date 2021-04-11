class Parser {
  constructor(arr, i) {
    this.arr = arr;
    this.i = i;
  }

  parse() {
    const p1 = this.arr.toString().split(" ");
    const p2 = p1.toString().split(".");
    const p3 = p2.toString().split(",");
    const p4 = p3.toString().split(":");
    const p5 = p4.toString().split(",");

    if (this.i == 5) {
      p5.pop();
      p5.pop();
      p5.pop();
      p5.splice(1, 1);
      p5.splice(2, 1);

      return p5;
    }
  }
}

module.exports = Parser;
