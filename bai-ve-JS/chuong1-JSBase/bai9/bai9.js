function taxiBill(km) {
  if (km < 0 || Number.isNaN(km)) {
    return "So km ko hop le";
  }

  if (km <= 1) {
    return "So tien phai tra : " + 10000;
  }

  if (km > 1 && km < 30) {
    var bill = 10000 + (km - 1) * 8000;
    return "So tien phai tra : " + bill;
  }

  if (km > 30) {
    var bill = 10000 + 29 * 8000 + (km - 30) * 7000;
    return "So tien phai tra : " + bill;
  }
}

var km = +prompt("Nhap so km : ");
console.log(taxiBill(km));
