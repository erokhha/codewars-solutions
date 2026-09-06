var maxSequence = function(arr){
    let currentSum = 0;
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (currentSum + arr[i] >= arr[i]) {
            currentSum += arr[i];
        } else {
            currentSum = 0;
            currentSum += arr[i];
        } 

        if (maxSum < currentSum) {
                maxSum = currentSum;
            }

  }
  return maxSum;
}

console.log(maxSequence([7,4,11,-11,39,36,10,-6,37,-10,-32,44,-26,-34,43,43]))
