const { findClosingParenthesis } = require("../findClosingParenthesis");

describe("findClosingParenthesis()", () => {
  it("should return -1 if string is empty", () => {
    expect(findClosingParenthesis("")).toBe(-1);
  });
  it("should return -1 if no number is given", () => {
    expect(findClosingParenthesis("(hello(world))")).toBe(-1);
  });
  it("should return -1 if no parentheses are found", () => {
    expect(findClosingParenthesis("dogs")).toBe(-1);
  });
  it("should return the correct index when one paranthesis is present", () => {
    expect(findClosingParenthesis("(dogs)", 1)).toBe(5);
  });
  it("should work with many parentheses", () => {
    expect(
      findClosingParenthesis(
        "Hello, (world, (foo) bar (something) else), foo (bar) cat",
        3
      )
    ).toBe(35);
    expect(
      findClosingParenthesis(
        "Hello, (world, (foo) bar (something) else), foo (bar) cat",
        1
      )
    ).toBe(41);
  });
  it("should work when target paranthesis is neither closed immediately nor the final to appear", () => {
    expect(findClosingParenthesis("(((())))", 1)).toBe(7);
    expect(findClosingParenthesis("(((())))", 2)).toBe(6);
    expect(findClosingParenthesis("(((())))", 3)).toBe(5);
    expect(findClosingParenthesis("(((())))", 4)).toBe(4);
  });
});
