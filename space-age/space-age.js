//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ORBITAL_PERIOD_IN_EARTH_YEARS = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

const EARTH_ORBITAL_PERIOD_IN_SECONDS = 31557600;

/**
 *
 * @param {string} planet
 * @param {number} secondsOld
 * @returns {number}
 */

export const age = (planet, secondsOld) => {
  return Number(
    (
      secondsOld /
      (ORBITAL_PERIOD_IN_EARTH_YEARS[planet] * EARTH_ORBITAL_PERIOD_IN_SECONDS)
    ).toFixed(2)
  );
};
