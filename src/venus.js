export class VenusAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.venusAgeConstant = 0.62;
    this.ageOnVenus = 0;
    this.diffInExpectancyAndAge = 0;
  }
  calculateVenusAge () {
    this.ageOnVenus = Math.round(this.earthAge / this.venusAgeConstant);
  } 
  aboveOrBelowLifeExpectancy(lifeExpectancy) {
    this.diffInExpectancyAndAge = lifeExpectancy.avgLifeExpect - this.ageOnVenus;
  }
}