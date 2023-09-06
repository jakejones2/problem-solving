const { romanNumeralEncoder } = require("../romanNumeralEncoder");

describe("romanNumeralEncoder()", () => {
  test("If matches any numeral exactly, correct numeral returned", () => {
    expect(romanNumeralEncoder(1)).toBe("I");
    expect(romanNumeralEncoder(5)).toBe("V");
    expect(romanNumeralEncoder(10)).toBe("X");
    expect(romanNumeralEncoder(50)).toBe("L");
    expect(romanNumeralEncoder(100)).toBe("C");
    expect(romanNumeralEncoder(500)).toBe("D");
    expect(romanNumeralEncoder(1000)).toBe("M");
  });

  test("can stack numerals exactly", () => {
    expect(romanNumeralEncoder(1500)).toBe("MD");
    expect(romanNumeralEncoder(600)).toBe("DC");
    expect(romanNumeralEncoder(550)).toBe("DL");
  });

  test("if within 10% of 10s or 20% of 5s, use preceding notation", () => {
    expect(romanNumeralEncoder(900)).toBe("CM");
    expect(romanNumeralEncoder(9)).toBe("IX");
    expect(romanNumeralEncoder(4)).toBe("IV");
    expect(romanNumeralEncoder(3)).toBe("III");
    expect(romanNumeralEncoder(8)).toBe("VIII");
  });
});
