function printPrimeNumber(n) {
  var s = "";
  for (let i = 2; i <= n; i++) {
    var count = 0;
    for (let j = 0; j <= i; j++) {
      if (i % j == 0) {
        count++;
      }
    }

    if (count == 2) {
      s += " " + i;
    }
  }

  return `Cac so nguyen to tu 2 - ${n} :` + s;
}

var n = +prompt("Nhap so n : ");

console.log(printPrimeNumber(n));
