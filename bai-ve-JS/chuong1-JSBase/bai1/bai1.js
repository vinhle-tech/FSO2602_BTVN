function calcBMI(weight, height) {
  var BMI = weight / (height * height);

  if (BMI < 18.5) {
    return "Thieu can";
  }

  if (BMI >= 18.5 && BMI < 23) {
    return "Binh thuong";
  }

  if (BMI >= 23 && BMI < 25) {
    return "Thua can";
  }

  if (BMI >= 25) {
    return "Beo phi";
  }
}

var weight = Number(prompt("Nhap vao can nang (kg) : "));
var height = Number(prompt("Nhap vao chieu cao (m) :"));

console.log(calcBMI(weight, height));
