//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 *
 * @param {string} str
 * @returns {boolean}
 */

export const isPaired = (str) => {
  const stacks = [];
  const startsBracket = ["[", "{", "("];
  const endsBracket = ["]", "}", ")"];
  const brackets = {
    "]": "[",
    "}": "{",
    ")": "(",
  };

  for (let char of str) {
    if (startsBracket.includes(char)) {
      stacks.push(char);
    } else if (endsBracket.includes(char)) {
      if (stacks.pop() !== brackets[char]) {
        return false;
      }
    }
  }

  return stacks.length === 0;
};
