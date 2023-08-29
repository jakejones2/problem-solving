// replicate the string splice function

function mySplice(arr, start, deleteCount, ...add) {
  // define edge cases
  if (start === undefined && deleteCount === undefined && add.length === 0) {
    start = Infinity;
  } else if (start === undefined) {
    start = 0;
  } else if (start < 0) {
    start = start + arr.length;
  }
  if (start < -arr.length) {
    start = 0;
  }
  if (deleteCount === undefined && add.length > 0) {
    deleteCount = 0;
  } else if (deleteCount === undefined && add.length === 0) {
    deleteCount = Infinity;
  }
  if (start >= arr.length) {
    deleteCount = 0;
    start = arr.length;
  }

  // copy array and delete central portion
  const spliced = [];
  let deleted = deleteCount;
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (i < start) {
      spliced[i] = arr[i];
    } else if (i >= start && deleted > 0) {
      if (i in arr) {
        deleted--;
      }
    } else {
      spliced[i - deleteCount] = arr[i];
    }
  }

  // remove all items from original array
  for (let i = 0; i < length; i++) {
    arr.shift();
  }

  // add items from copied array back into original with extras
  const addLength = add.length;
  for (let i = 0; i < spliced.length + addLength; i++) {
    if (i < start) {
      arr[i] = spliced[i];
    } else if (add.length > 0) {
      arr[i] = add.shift();
    } else {
      arr[i] = spliced[i - addLength];
    }
  }

  return arr;
}

module.exports = {
  mySplice,
};
