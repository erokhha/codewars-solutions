function digitalRoot(n) {
  while (n > 9) {
    let arrayNumber = `${n}`.split("");
    n = arrayNumber.reduce((num1, num2) => parseInt(num1) + parseInt(num2), 0);
  }
  return n;
}

console.log(digitalRoot(456786));
