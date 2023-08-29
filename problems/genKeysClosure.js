/* 
Create a function that takes an incrementing function and a seed. It  
should return a function that when passed a character, generates a unique
code based on the seed and incrementing function. See the tests for it to
make sense! 
*/

function genSymFF(unaryFunc, seed) {
  function getSymF(char) {
    let code = seed;
    function gen() {
      code = unaryFunc(code);
      return `${char}${code}`;
    }
    return gen;
  }
  return getSymF;
}

module.exports = { genSymFF };
