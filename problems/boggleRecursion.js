/* 
Write a function that evaluates whether a word is possible on a given boggle board.
Valid words must be a path on a grid of letters, and each step of the path can only 
link adjacent letters, including diagonals (like a chess King). You cannot repeat 
letters - once a square has been visited it is discounted.
*/

function boggle(board, guess) {
  const width = board[0].length;

  // converts flat array into equivalent coords
  function getCoords(index, value) {
    const xPos = (index + width) % width;
    const yPos = Math.floor(index / width);
    return { value, index, x: xPos, y: yPos };
  }

  function recursiveSearch(startCoords, guess, values) {
    // get all positions of the next character
    let nextCoords = [];
    for (let i = 0; i < values.length; i++) {
      if (guess[1] === values[i]) {
        nextCoords.push(getCoords(i, guess[1]));
      }
    }
    // if the next character isn't on the board, return false
    if (nextCoords.length === 0) return false;
    // for each start position, see if any of the next positions work
    for (const pos of startCoords) {
      for (const npos of nextCoords) {
        // same position cannot be used twice
        if (npos.index === pos.index) continue;
        // must not be futher than one square away in any direction
        else if (pos.x > npos.x + 1 || pos.x < npos.x - 1) continue;
        else if (pos.y > npos.y + 1 || pos.y < npos.y - 1) continue;
        else {
          // base case
          if (guess.length === 2) return true;
          // create a new board, with the characters used so far set to null
          const newValues = [...values];
          newValues[pos.index] = null;
          // shift first character from the string and repeat at further depth
          const newGuess = guess.split("").slice(1).join("");
          if (recursiveSearch([npos], newGuess, newValues)) return true;
          // ...or try the next starting position
        }
      }
    }
    // if none of the starting positions yield the full guess
    return false;
  }

  // flatten array bottom up so it can be mapped to pseudo grid
  const values = [...board].reverse().flat();
  // find the first set of starting coords
  const startCoords = [];
  for (let i = 0; i < values.length; i++) {
    if (guess[0] === values[i]) {
      startCoords.push(getCoords(i, guess[0]));
    }
  }
  if (startCoords.length === 0) return false;
  return recursiveSearch(startCoords, guess, values);
}

module.exports = {
  boggle,
};
