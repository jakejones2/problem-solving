/*
Function takes a string and returns it sorted alphabetically,
but upper-case characters come before lower-case.
*/

function herdTheBabies(str) {
  const characters = str.split("");
  // convert to tuple [ASCII code, character]
  const charCodeTuples = characters.map((char) => [char.charCodeAt(0), char]);
  // if the character code is lowercase, convert to uppercase
  // but leave the character (tuple[1]) intact
  charCodeTuples.map((tuple) => {
    if (tuple[0] > 90) tuple[0] -= 32;
    return tuple;
  });
  charCodeTuples.sort();
  const sortedChars = charCodeTuples.map((tuple) => tuple[1]);
  return sortedChars.join("");
}

module.exports = { herdTheBabies };
