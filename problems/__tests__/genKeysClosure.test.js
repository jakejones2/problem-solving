const { genSymFF } = require("../genKeysClosure.js");

function increment(num) {
  return num + 1;
}

describe("genSymFF", () => {
  it("returns a function", () => {
    const genSymF = genSymFF(increment, 0);
    expect(typeof genSymF).toBe("function");
  });
  it("giving increment() and a seed will generate corresponding keys ", () => {
    const genSymF = genSymFF(increment, -1);
    const genA = genSymF("A");
    const genB = genSymF("B");
    expect(genA()).toBe("A0");
    expect(genB()).toBe("B0");
    expect(genB()).toBe("B1");
    expect(genA()).toBe("A1");
    expect(genB()).toBe("B2");
    expect(genB()).toBe("B3");
    expect(genA()).toBe("A2");
  });
});
