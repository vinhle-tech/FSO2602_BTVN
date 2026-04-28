function printIsoscelesTriangle(n, character) {
  var j = (k = 1);
  for (let i = 1; i <= n; i++) {
    var s = "";
    while (j <= n) {
      var j2 = 1;
      while (j2 <= n - j) {
        s += " ";
        j2++;
      }
      j++;
      break;
    }

    while (k <= n) {
      var k2 = 1;
      while (k2 <= 2 * k - 1) {
        s += character;
        k2++;
      }
      k++;
      break;
    }

    console.log(s);
  }
}

var n = +prompt("Nhap do dai hai canh ben cua tam giac can : ");
var character = prompt("Nhap ki tu : ");

printIsoscelesTriangle(n, character);
