export class MercuryAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAgeConstant = 0.24;
    this.ageOnMercury = 0;
  }
  calculateMercuryAge = () => {
    this.ageOnMercury = Math.round(this.earthAge / this.mercuryAgeConstant);
  }
  aboveOrBelowLifeExpect = () => {
    
  }
}