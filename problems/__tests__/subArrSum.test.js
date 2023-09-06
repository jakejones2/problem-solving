const { subArrSum } = require("../subArrSum");

describe("subArrSum()", () => {
  test("should return the sum of positive numbers", () => {
    expect(subArrSum([1, 2, 4, 4, 5])).toBe(16);
  });
  test("should return for negative numebrs", () => {
    expect(subArrSum([-1, -3, -5])).toBe(0);
  });
  test("should work for misc examples", () => {
    expect(subArrSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(subArrSum([9, 8, 7, -3, 6, 5, 4, -3, 2, 1])).toBe(36);
    expect(subArrSum([5, -6, 2, 9, -4, -3, 8, -10, 20])).toBe(22);
  });
});
