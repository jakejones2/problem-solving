// Break a caesar cipher that always ends with the word 'X'

const counterIntelligence = (str) => {
  if (str.length === 1) return "X";
  const upperStr = str.toUpperCase();
  const words = upperStr.split(" ");
  const x = words.pop();
  // capital X is char code 88 ASCII
  const shift = 88 - x.charCodeAt(0);
  const decodedWords = words.map((word) => {
    return word
      .split("")
      .map((char) => {
        const code = char.charCodeAt(0);
        // filter out all non A-Z chars
        if (code < 65 || code > 90) return char;
        // apply shift
        let newCode = code + shift;
        // wrap round the alphabet
        if (newCode < 65) newCode += 26;
        if (newCode > 90) newCode -= 26;
        return String.fromCharCode(newCode);
      })
      .join("");
  });
  return decodedWords.join(" ") + " X";
};

module.exports = { counterIntelligence };
