function sort(a, b, c) {
  while (1) {
    if (a <= b && b <= c) {
      console.log(`Day sau khi sap xep : ${a} ${b} ${c}`);
      return;
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

sort(a, b, c);
