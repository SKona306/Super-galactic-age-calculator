
export class MarsAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.marsAgeConstant = 1.88;
    this.ageOnMars = 0;
    this.diffInExpectancyAndAge = 0;
  }
  calculateMarsAge() {
    this.ageOnMars = Math.round(this.earthAge / this.marsAgeConstant);
  }
  aboveOrBelowLifeExpectancy(lifeExpectancy) {
    this.diffInExpectancyAndAge = lifeExpectancy.avgLifeExpect - this.ageOnMars;
  }
}