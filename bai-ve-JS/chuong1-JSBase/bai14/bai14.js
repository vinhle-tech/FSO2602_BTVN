function printChristmasTree(n, character) {
  if (n < 0 || n >= 100 || Number.isNaN(n) || character.length > 1) {
    console.log("Cay thong ko hop le");
    return;
  }
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

  for (let i = n - 1; i < n; i++) {
    var s = "";
    var j = 1;
    while (j <= n - 1) {
      s += " ";
      j++;
    }
    s += character;
    console.log(s);
  }
}

var n = +prompt("Nhap chieu cao tan cay cua cay thong : ");
var character = prompt("Chon ki tu tao cay thong : ");

printChristmasTree(n, character);
