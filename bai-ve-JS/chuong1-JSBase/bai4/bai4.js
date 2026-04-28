function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    console.log("Day la tam giac");
  } else {
    console.log("Day ko phai tam giac");
  }
}

var a = +prompt("Nhap canh a :");
var b = +prompt("Nhap canh b :");
var c = +prompt("Nhap canh c :");

isTriangle(a, b, c);
