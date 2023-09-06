// Convert numbers to roman numerals

const romanNumeralEncoder = (num) => {
  const numerals = ["M", "D", "C", "L", "X", "V", "I"];
  const values = [1000, 500, 100, 50, 10, 5, 1];
  let output = "";
  for (let i = 0; i < values.length; i++) {
    const val = values[i];
    if (num < (String(val)[0] === "5" ? val * 0.8 : val * 0.9)) continue;
    if (num < val) {
      const difference = val - num;
      output += romanNumeralEncoder(difference) + numerals[i];
      return output;
    }
    const quotient = Math.floor(num / val);
    output += numerals[i].repeat(quotient);
    const remainder = num % val;
    if (remainder === 0) return output;
    else num -= quotient * val;
  }
};

module.exports = { romanNumeralEncoder };
