//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Define the Squares class to calculate square-related values up to a given number
export class Squares {
  // Constructor method, setting the initial number value for calculations
  constructor(number) {
    this.number = number;
  }

  // Calculate the sum of the squares of each integer up to 'number'
  get sumOfSquares() {
    let totalSumOfSquares = 0;
    for (let i = 1; i <= this.number; i++) {
      totalSumOfSquares += i ** 2;
    }
    return totalSumOfSquares;
  }

  // Calculate the square of the sum of each integer up to 'number'
  get squareOfSum() {
    let totalSum = 0;
    for (let i = 1; i <= this.number; i++) {
      totalSum += i;
    }
    return totalSum ** 2;
  }

  // Calculate the difference between the square of the sum and the sum of squares
  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
