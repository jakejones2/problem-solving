const rotateArray = require("../rotateArray");

describe("rotateArray", () => {
  test("should return an array", () => {
    expect(Array.isArray(rotateArray([1, 2, 3], 0))).toBe(true);
  });
  test("should return an identical array if the number is zero", () => {
    expect(rotateArray([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });
  test("should return a new array", () => {
    const arr = [1, 2];
    expect(rotateArray(arr, 0)).not.toBe(arr);
  });
  test("should not mutate the given array", () => {
    const arr = [1, 2, 3, 4];
    rotateArray(arr);
    expect(arr).toEqual([1, 2, 3, 4]);
  });
  test("should rotate the array once to the right", () => {
    expect(rotateArray([1, 2, 3, 4], 1)).toEqual([4, 1, 2, 3]);
  });
  test("should rotate n number of times to the right", () => {
    expect(rotateArray([1, 2, 3, 4, 5, 6], 4)).toEqual([3, 4, 5, 6, 1, 2]);
  });
  test("should rotate once to the left", () => {
    expect(rotateArray([1, 2, 3], -1)).toEqual([2, 3, 1]);
  });
  test("should rotate n number of time to the left", () => {
    expect(rotateArray([1, 2, 3, 4, 5, 6, 7, 8], -5)).toEqual([
      6, 7, 8, 1, 2, 3, 4, 5,
    ]);
  });
  test("works when n is greater than array length", () => {
    expect(rotateArray([1, 2, 3, 4], 23)).toEqual([2, 3, 4, 1]);
    expect(rotateArray([1, 2, 3, 4, 5], -47)).toEqual([3, 4, 5, 1, 2]);
  });
});
