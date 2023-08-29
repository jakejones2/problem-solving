/* 
When given the index of an opening parenthesis, return 
the index of the matching closing parenthesis. 
*/

const findClosingParenthesis = (str, target) => {
  let openCount = 0;
  let closeCount = 0;
  const chars = str.split("");
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === "(") {
      openCount++;
    } else if (chars[i] === ")") {
      if (openCount === target) return i;
      if (openCount > target) {
        const closesNeeded = openCount - target;
        if (closeCount === closesNeeded) {
          return i;
        }
      }
      closeCount++;
    }
  }
  return -1;
};

module.exports = { findClosingParenthesis };
