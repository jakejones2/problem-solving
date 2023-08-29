const { herdTheBabies } = require("../herdBabies");

describe("herdTheBabies", () => {
  test("should return single characters unchanged", () => {
    expect(herdTheBabies("a")).toBe("a");
  });
  test("should return uppercase before lowercase", () => {
    expect(herdTheBabies("aA")).toBe("Aa");
  });
  test("should work for any combination of characters A-Z or a-z", () => {
    expect(herdTheBabies("AadBbbDcBeaCAbAcbbcAbB")).toBe(
      "AAAAaaBBBbbbbbbCcccDde"
    );
  });
});
