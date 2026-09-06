const left = [
  "q", "w", "e", "r", "t",
  "a", "s", "d", "f", "g",
  "z", "x", "c", "v", "b"
];


function whichHand (string) {
    let flagRight = false;
    let flagLeft = false;
    for (var i of string) {
            if (left.includes(i)) {
            flagLeft = true;
            } else  {flagRight = true}  

            if (flagRight === true && flagLeft === true) {
                return "BOTH";
            }
    }
    
    if (flagLeft === true && flagRight === false) {
        return "LEFT"
    }
    else if (flagLeft === false && flagRight === true) {
        return "RIGHT"
    }
    else {
        return "NONE"
    }

}



console.log(whichHand('milk'))
