
export class MarsAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.marsAgeConstant = 1.88;
    this.ageOnMars = 0;
  }
  calculateMarsAge () {
    this.ageOnMars = Math.round(this.earthAge / this.marsAgeConstant);
  }
}