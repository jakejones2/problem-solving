// Implement a binary search for a list of ordered numbers

const binarySearch = (num, arr, startIndex = 0) => {
  const middleIndex = Math.floor(arr.length / 2);
  if (arr[middleIndex] === num) return startIndex + middleIndex;
  if (arr.length === 1) return -1;
  if (arr[middleIndex] < num) {
    return binarySearch(
      num,
      arr.slice(middleIndex + 1),
      startIndex + middleIndex + 1
    );
  }
  return binarySearch(num, arr.slice(0, middleIndex), startIndex);
};

module.exports = { binarySearch };
