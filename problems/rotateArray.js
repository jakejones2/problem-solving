// rotate an array a given number of times left or right (see tests)

function rotateArray(arr, num) {
  function rotate(arr) {
    const last = arr.pop();
    arr.unshift(last);
  }

  // if shifting to the left, shift to the right the equivalent distance
  if (num < 0) num = arr.length + (num % arr.length);

  arr = [...arr];
  while (num % arr.length > 0) {
    rotate(arr);
    num--;
  }

  return arr;
}

module.exports = rotateArray;
