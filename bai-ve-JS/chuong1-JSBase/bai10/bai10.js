function electricBill(electric) {
  if (electric < 0 || Number.isNaN(electric)) {
    return "So dien ko hop le";
  }

  if (electric >= 0 && electric <= 50) {
    var bill = electric * 1500;
    return "So tien can phai tra : " + bill.toLocaleString("vi-VN");
  }

  if (electric > 50 && electric <= 100) {
    var bill = 50 * 1500 + (electric - 50) * 2000;
    return "So tien can phai tra : " + bill.toLocaleString("vi-VN");
  }

  if (electric > 100 && electric <= 200) {
    var bill = 50 * 1500 + 50 * 2000 + (electric - 100) * 3000;
    return "So tien can phai tra : " + bill.toLocaleString("vi-VN");
  }

  if (electric > 200 && electric <= 350) {
    var bill = 50 * 1500 + 50 * 2000 + 100 * 3000 + (electric - 200) * 4000;
    return "So tien can phai tra : " + bill.toLocaleString("vi-VN");
  }

  if (electric > 350) {
    var bill =
      50 * 1500 + 50 * 2000 + 100 * 3000 + 150 * 4000 + (electric - 350) * 5000;
    return "So tien can phai tra : " + bill.toLocaleString("vi-VN");
  }
}

var electric = +prompt("Nhap so dien : ");

console.log(electricBill(electric));
