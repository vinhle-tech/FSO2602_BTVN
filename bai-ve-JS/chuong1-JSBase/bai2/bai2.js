function swapNumber(a, b) {
  var c = a - b;
  b = a;
  a = b - c;

  console.log(a, b);
}

var a = +prompt("Nhap so a : ");
var b = +prompt("Nhap so b : ");

swapNumber(a, b);
