const { boggle } = require("../boggleRecursion");

describe.only("boggle", () => {
  test("guess length 0 is false", () => {
    const board = [
      ["l", "e", "l"],
      ["p", "h", "l"],
      ["d", "i", "o"],
    ];
    expect(boggle(board, "")).toBe(false);
  });
  test("finds two-letter word", () => {
    const board = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"],
    ];
    expect(boggle(board, "be")).toBe(true);
    expect(boggle(board, "ah")).toBe(false);
  });
  test("finds three-letter word", () => {
    const board = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"],
    ];
    expect(boggle(board, "bed")).toBe(true);
    expect(boggle(board, "bag")).toBe(false);
  });
  test("finds three-letter word with duplicates", () => {
    const board = [
      ["x", "b", "a"],
      ["d", "j", "f"],
      ["g", "e", "b"],
    ];
    expect(boggle(board, "bed")).toBe(true);
    expect(boggle(board, "bag")).toBe(false);
  });
  test("doesn't revisit the same letter", () => {
    const board = [
      ["x", "b", "a"],
      ["d", "j", "f"],
      ["g", "a", "b"],
    ];
    expect(boggle(board, "dad")).toBe(false);
    expect(boggle(board, "bag")).toBe(true);
  });
  test("can re-evalute path deep in recursion", () => {
    const board = [
      ["x", "b", "a"],
      ["d", "j", "f"],
      ["g", "a", "b"],
    ];
    expect(boggle(board, "bag")).toBe(true);
  });
  test("does not mutate the original board", () => {
    const board = [
      ["x", "b", "a"],
      ["d", "j", "f"],
      ["g", "a", "b"],
    ];
    boggle(board, "bag");
    expect(board).toEqual([
      ["x", "b", "a"],
      ["d", "j", "f"],
      ["g", "a", "b"],
    ]);
  });
  test("should work on a 4x4 board", () => {
    const board = [
      ["e", "a", "r", "a"],
      ["n", "l", "e", "c"],
      ["i", "a", "i", "s"],
      ["b", "y", "o", "r"],
    ];
    expect(boggle(board, "ear")).toBe(true);
    expect(boggle(board, "ears")).toBe(false);
    expect(boggle(board, "rio")).toBe(true);
    expect(boggle(board, "cereal")).toBe(false);
    expect(boggle(board, "rscareioybailnea")).toBe(true);
  });
});
