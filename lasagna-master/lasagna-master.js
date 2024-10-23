/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * Determines the status of a lasagna based on the remaining cooking time.
 *
 * @param {number} remainingTime
 * @returns {string} the cooking status
 */

export function cookingStatus(remainingTime) {
  if (remainingTime === 0) {
    return "Lasagna is done.";
  } else if (remainingTime > 0) {
    return "Not done, please wait.";
  }
  return "You forgot to set the timer.";
}

/**
 * Calculates the total preparation time for making a lasagna based on the number of layers
 *
 * @param {string[]} layers
 * @param {number} preparationTime
 * @returns {number} the total of preparation time
 */

export function preparationTime(layers, preparationTime) {
  if (!preparationTime) return layers.length * 2;
  return layers.length * preparationTime;
}

/**
 * Compute the amounts of noodles and sauce needed
 *
 * @param {string[]} layers
 * @returns {{noodles: number, sauce: number}} quantities of noodles and sauce
 */

export function quantities(layers) {
  let totalNoodles = layers.filter((layer) => layer === "noodles").length;
  let totalSauce = layers.filter((layer) => layer === "sauce").length;

  return {
    noodles: totalNoodles * 50,
    sauce: totalSauce * 0.2,
  };
}

/**
 * Adds a secret ingredient to your recipe based on a friend's ingredient list
 *
 * @param {string[]} friendsList
 * @param {string[]} myList
 */

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

/**
 * Adjusts the ingredient quantities in a recipe based on the desired number of portions
 *
 * @param {{noodles: number, sauce: number, mozzarella: number, meat: number}} recipe
 * @param {number} portions
 * @returns {{}} the scaled recipe
 */

export function scaleRecipe(recipe, portions) {
  const totalPortions = portions / 2;
  const scaledRecipe = {};

  for (const ingredient in recipe) {
    scaledRecipe[ingredient] = recipe[ingredient] * totalPortions;
  }

  return scaledRecipe;
}
