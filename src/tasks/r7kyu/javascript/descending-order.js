function descendingOrder(n) {
  if (n < 0) {
    return "Write correct non-negative number";
  } else {
    const arrN = `${n}`.split("").sort().reverse().join("");
    return parseInt(arrN);
  }
}

console.log(descendingOrder(987654));
