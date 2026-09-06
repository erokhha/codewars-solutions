function narcissistic(value) {
  let newNum = 0;
  pow = `${value}`.length;
  for (let i = 0; i < pow; i++) {
    newNum += `${value}`[i] ** pow;
  }

  if (newNum == value) {
    return true;
  } else {
    return false;
  }
}

console.log(narcissistic(1634));
