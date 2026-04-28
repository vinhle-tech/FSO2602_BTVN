function findMaxNumber(a, b, c) {
  while (1) {
    if (a <= b && b <= c) {
      return c;
    }

    if (a > b) {
      var d = a - b;
      b = a;
      a = b - d;
    }

    if (b > c) {
      var d = b - c;
      c = b;
      b = c - d;
    }
  }
}

var a = +prompt("Nhap so a : ");
var b = +prompt("Nhap so b : ");
var c = +prompt("Nhap so c : ");

console.log(findMaxNumber(a, b, c));
