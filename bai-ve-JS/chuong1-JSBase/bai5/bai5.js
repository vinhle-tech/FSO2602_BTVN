function printSquareNumber(n) {
  console.log("So chinh phuong tu 2 - " + n + " La:");
  for (let i = 2; i <= n; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      console.log(i);
    }
  }
}

var n = +prompt("Nhap so n : ");

printSquareNumber(n);
