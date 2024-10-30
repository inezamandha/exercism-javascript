//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 *
 * @param {number} number
 * @returns {number}
 */

export const isArmstrongNumber = (number) => {
  const digits = number.toString().split("");
  const numDigits = digits.length;

  const sumOfPowerNumber = digits.reduce(
    (total, num) => (total += num ** numDigits),
    0
  );

  return number === sumOfPowerNumber;
};
