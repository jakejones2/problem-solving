const { counterIntelligence } = require("../counterIntelligence");

describe("counterIntelligence()", () => {
  it("should return a single character of X in uppercase", () => {
    expect(counterIntelligence("Y")).toBe("X");
    expect(counterIntelligence("B")).toBe("X");
  });
  it("should return correctly for a small string of two words", () => {
    expect(counterIntelligence("BCD Y")).toBe("ABC X");
  });
  it("should convert all chars to upper case", () => {
    expect(counterIntelligence("bcd y")).toBe("ABC X");
  });
  it("should work on any length of string", () => {
    expect(counterIntelligence("NKRRU YCKKZNKGXZ D")).toBe(
      "HELLO SWEETHEART X"
    );
    expect(
      counterIntelligence(
        "ANVNVKNA CX YRLT DY IDLLQRWR XW HXDA FJH QXVN OAXV FXAT, MJAURWP G"
      )
    ).toBe(
      "REMEMBER TO PICK UP ZUCCHINI ON YOUR WAY HOME FROM WORK, DARLING X"
    );
  });
  it("should handle all char types", () => {
    expect(counterIntelligence("ngbk g toik jge :) d")).toBe(
      "HAVE A NICE DAY :) X"
    );
  });
});
