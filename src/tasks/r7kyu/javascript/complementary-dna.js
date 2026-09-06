function dnaStrand(dna) {
  newString = "";
  for (var i of dna) {
    if (i == "A") {
      newString += "T";
    } else if (i == "T") {
      newString += "A";
    } else if (i == "C") {
      newString += "G";
    } else {
      newString += "C";
    }
  }
  return newString;
}

console.log(dnaStrand("ATTGC"));

console.log(dnaStrand("ATTGC"));
