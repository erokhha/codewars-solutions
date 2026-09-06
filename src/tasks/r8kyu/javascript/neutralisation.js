function neutralise(s1, s2) {
  const newString = s1 + s2;
  let s = "";
  let _lenghtS1S2 = newString.length;
  let halfLenghtS1S2 = _lenghtS1S2 / 2;
  for (let i = 0; i <= halfLenghtS1S2-1; i++ ) {
    if (newString[i] === newString[i + halfLenghtS1S2]) {
      s += newString[i]
    } else {
        s += '0'
    }
      
  }
  return s;
}

console.log(neutralise("-++-", "-+-+"))
