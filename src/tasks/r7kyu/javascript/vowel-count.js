vowelsArray = ["a", "e", "o", "i", "u"];
function getCount(str) {
  c = 0;
  for (const i of str) {
    console.log(i);
    if (vowelsArray.includes(i)) {
      c += 1;
    }
  }

  return c;
}

console.log(getCount("ertyujbvfdrtyu"));
