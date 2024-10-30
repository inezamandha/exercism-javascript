//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  get triangleInequality() {
    const [a, b, c] = this.sides;
    return (
      this.sides.every((side) => side > 0) &&
      a + b >= c &&
      b + c >= a &&
      c + a >= b
    );
  }

  get isEquilateral() {
    return (
      this.triangleInequality &&
      this.sides.every((side) => side === this.sides[0])
    );
  }

  get isIsosceles() {
    const [a, b, c] = this.sides;
    return this.triangleInequality && (a === b || b === c || c === a);
  }

  get isScalene() {
    const [a, b, c] = this.sides;
    return this.triangleInequality && a !== b && b !== c && c !== a;
  }
}
