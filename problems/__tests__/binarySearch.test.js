const { binarySearch } = require("../binarySearch");

describe("binarySearch()", () => {
  test("finds the correct index when length = 1", () => {
    expect(binarySearch(1, [1])).toBe(0);
  });
  test("finds the correct index when length = 2", () => {
    expect(binarySearch(2, [1, 2])).toBe(1);
  });
  test("finds the correct index when has to go backwards", () => {
    expect(binarySearch(3, [1, 3, 5, 7, 9])).toBe(1);
  });
  test("finds the correct index when has to go backwards and forwards", () => {
    const arr = [3, 4, 6, 8, 19, 22, 26, 39, 41, 50, 59, 61, 68, 77];
    expect(binarySearch(22, arr)).toBe(5);
  });
  test("does not modify given array", () => {
    const arr = [3, 4, 6, 8, 19, 22, 26, 39, 41, 50, 59, 61, 68, 77];
    const arrCopy = [...arr];
    binarySearch(41, arr);
    expect(arr).toEqual(arrCopy);
  });
  test("returns -1 if not found", () => {
    const arr = [3, 4, 6, 8, 19, 22, 26, 39, 41, 50, 59, 61, 68, 77];
    expect(binarySearch(27, arr)).toBe(-1);
  });
});
