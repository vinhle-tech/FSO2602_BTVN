function printMultiplicationTable() {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      var kq = i * j;
      console.log(`${i} x ${j} = ${kq}`);
    }
  }
}

printMultiplicationTable();
