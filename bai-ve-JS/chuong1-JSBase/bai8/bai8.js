function isSameSign(a, b) {
  a *= -1;
  b *= -1;

  if (a < 0 && b < 0) {
    return true;
  } else {
    return false;
  }
}

var a = +prompt("Nhap so a : ");
var b = +prompt("Nhap so b : ");

console.log(isSameSign(a, b));
