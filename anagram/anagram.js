//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 *
 * @param {string} word
 * @param {string[]} listOfWords
 */

export const findAnagrams = (word, listOfWords) => {
  const normalizedWord = word.toLowerCase();
  const sortedWord = normalizedWord.split("").sort().join("");

  const anagrams = listOfWords.filter((candidate) => {
    const normalizedCandidate = candidate.toLowerCase();
    return (
      normalizedCandidate !== normalizedWord &&
      normalizedCandidate.length === word.length &&
      sortedWord === normalizedCandidate.split("").sort().join("")
    );
  });

  return anagrams;
};
