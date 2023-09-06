// Find the subarray, of any length, with the greatest sum
// within an array of positive/negative integers

const subArrSum = (arr, best = 0) => {
  if (arr.length < 1) return arr[0] > best ? arr[0] : best;
  // a winning array will never start with a number less than 1
  if (arr[0] < 1) {
    arr.shift();
    return subArrSum(arr, best);
  }
  for (let i = 0; i < arr.length; i++) {
    // a winning array will never end with a negative number
    if (arr[i] < 0) continue;
    const sum = arr.slice(0, i + 1).reduce((a, b) => a + b);
    if (sum > best) best = sum;
  }
  arr.shift();
  return subArrSum(arr, best);
};

module.exports = { subArrSum };
