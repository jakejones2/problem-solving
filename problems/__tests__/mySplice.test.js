const { mySplice } = require("../mySplice");

describe.only("mySplice", () => {
  test("should return an array", () => {
    const arr = [];
    expect(Array.isArray(mySplice(arr))).toBe(true);
  });
  test("should return the same array", () => {
    const arr = [];
    expect(mySplice(arr)).toBe(arr);
  });
  test("when given only one parameter less than the array length, all subsequent elements should be deleted", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = [1, 2, 3];
    expect(mySplice(arr, 3)).toEqual(result);
  });
  test("when given a negative start, counts from the end of the array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const result = [1, 2, 3, 4, 5];
    expect(mySplice(arr, -2)).toEqual(result);
  });
  test("if start is less than -arrlength, 0 is used", () => {
    expect(mySplice([1, 2, 3], -8)).toEqual([]);
  });
  test("only deletes as many elements as directed by delete parameter", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(mySplice(arr, 3, 2)).toEqual([1, 2, 3, 6]);
  });
  test("if undefined is passed as start, it is converted to 0", () => {
    const result = mySplice([1, 2, 3], undefined, 1);
    expect(result).toEqual([2, 3]);
  });
  test("can add values from start position", () => {
    const result = mySplice([1, 2, 3, 4], 2, 0, "cat", true);
    expect(result).toEqual([1, 2, "cat", true, 3, 4]);
  });
  test("can add values from start position and delete", () => {
    const result = mySplice([1, 2, 3, 4], 2, 1, "cat", true);
    expect(result).toEqual([1, 2, "cat", true, 4]);
  });
  test("if deleteCount is passed as undefined, and adding is required, 0 is used", () => {
    expect(mySplice([1, 2, 3], 1, undefined, "dog", "cat")).toEqual([
      1,
      "dog",
      "cat",
      2,
      3,
    ]);
  });
  test("if mySplice is called with no arguments other than arr, nothing is deleted", () => {
    expect(mySplice([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
  test("if the start is greater than arrlength, then mySplice only adds", () => {
    const result = mySplice([1, 2, 3, 4], 6, 2, "fish", "cake");
    expect(result).toEqual([1, 2, 3, 4, "fish", "cake"]);
  });
  test("leaves sparse arrays in deleted portion intact", () => {
    const result = mySplice([1, , 3, , 5, 6, 7, 8, , 10], 2, 2, "fish");
    expect(result).toEqual([1, , "fish", , 6, 7, 8, , 10]);
    expect(result[3]).toEqual(undefined); // index 3 should be empty
    expect(result.length).toEqual(9); // should not delete any of the empty slots (loses 2, gains one)
  });
});
