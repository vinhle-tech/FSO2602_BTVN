let a = +prompt("Nhap a : ");
let s = "";
for (i = 0; i < a; i++) {
  for (j = 0; j < a; j++) {
    s += "* ";
  }
  s += "\n";
}

console.log(s);
