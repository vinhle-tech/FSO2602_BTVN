function taxSalary(salary) {
  if (Number.isNaN(salary) || salary < 0) {
    return "Thu nhap ko hop le";
  }
  if (salary <= 11000000) {
    return "Khong tinh thue";
  }

  if (salary > 11000000 && salary <= 25000000) {
    return (salary - 11000000) * 0.05;
  }

  if (salary > 25000000 && salary <= 50000000) {
    return 14000000 * 0.05 + (salary - 25000000) * 0.1;
  }

  if (salary > 50000000 && salary <= 80000000) {
    return 14000000 * 0.05 + 25000000 * 0.1 + (salary - 50000000) * 0.2;
  }

  if (salary > 80000000) {
    return (
      14000000 * 0.05 +
      25000000 * 0.1 +
      30000000 * 0.2 +
      (salary - 80000000) * 0.3
    );
  }
}

let a = +prompt("Nhap so tien kiem duoc (trieu)");

console.log(taxSalary(a));
