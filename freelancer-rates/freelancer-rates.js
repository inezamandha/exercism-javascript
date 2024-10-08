// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

const WORK_HOUR_PER_DAY = 8;

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * WORK_HOUR_PER_DAY;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / (ratePerHour * WORK_HOUR_PER_DAY));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const billableDaysInMonth = 22;

  // Step 1: Calculate the daily rate
  const dailyRate = ratePerHour * 8; // assuming 8 hours in a day

  // Step 2: Calculate the number of full months and remaining days
  const fullMonths = Math.floor(numDays / billableDaysInMonth);
  const remainingDays = numDays % billableDaysInMonth;

  // Step 3: Calculate the discounted monthly cost
  const discountedMonthlyCost =
    dailyRate * billableDaysInMonth * (1 - discount);

  // Step 4: Calculate the cost for remaining days
  const remainingDaysCost = remainingDays * dailyRate;

  // Step 5: Calculate the total cost
  const totalCost = fullMonths * discountedMonthlyCost + remainingDaysCost;

  // Step 6: Return the total cost, rounded up
  return Math.ceil(totalCost);
}
