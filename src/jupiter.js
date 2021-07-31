
export class JupiterAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.jupiterAgeConstant = 11.86;
    this.ageOnJupiter = 0;
  }
  calculateJupiterAge () {
    this.ageOnJupiter = Math.round(this.earthAge / this.jupiterAgeConstant);
    if(this.ageOnJupiter < 1) {
      this.ageOnJupiter = 1;
    }
  }
}