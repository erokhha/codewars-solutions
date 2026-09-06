function twoSum(numbers, target) {
  breakMark:
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      console.log(numbers[i], numbers[j]);
      if (numbers[i] + numbers[j] == target) {
        let indexArray = [i, j];
        return indexArray;
        break breakMark;
      }
    }
  }
}

console.log(twoSum([3, 2, 4], 6));
