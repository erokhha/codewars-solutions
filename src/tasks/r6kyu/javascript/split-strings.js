function solution(str) {
  let a = new Array();
  if (str.length % 2 == 0) {
    for (let i = 0; i < str.length; i += 2) {
      a.push(str[i] + str[i + 1]);
    }
  } else {
    str += "_";
    for (let i = 0; i < str.length; i += 2) {
      a.push(str[i] + str[i + 1]);
    }
  }
  return a;
}

console.log(solution("abc"));
