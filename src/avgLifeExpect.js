
export class AvgLifeExpect {
  constructor(gender, activity, smoke, drink, education, sleep) {
    this.gender = gender;
    this.activity = activity;
    this.smoke = smoke;
    this.drink = drink;
    this.education = education;
    this.sleep = sleep;
    this.avgLifeExpect = 70;
  }
  calculateAvgLifeExpectancy() {
    if(this.gender === "male") {
      this.avgLifeExpect += 2;
    }else if(this.gender === "female") {
      this.avgLifeExpect += 3;
    }
    if(this.activity === "not-active") {
      this.avgLifeExpect -= 3;
    }else if(this.activity === "active") {
      this.avgLifeExpect += 1;
    }else if(this.activity === "very-active") {
      this.avgLifeExpect += 3;
    }
    if(this.smoke === true) {
      this.avgLifeExpect -= 5;
    }else if(this.smoke === false) {
      this.avgLifeExpect += 3;
    }
    if(this.drink === true) {
      this.avgLifeExpect -= 5;
    }else if(this.drink === false) {
      this.avgLifeExpect += 3;
    }
    if(this.education === "hs") {
      this.avgLifeExpect += 1;
    }else if(this.education === "college") {
      this.avgLifeExpect += 2;
    }else if(this.education === "graduate") {
      this.avgLifeExpect += 3;
    }
    if(this.sleep === 1) {
      this.avgLifeExpect -= 10;
    }else if(this.sleep === 2) {
      this.avgLifeExpect -= 6;
    }else if(this.sleep === 3) {
      this.avgLifeExpect -= 2;
    }else if(this.sleep === 4) {
      this.avgLifeExpect += 2;
    }else if(this.sleep === 5) {
      this.avgLifeExpect += 6;
    }else if(this.sleep === 6) {
      this.avgLifeExpect += 8;
    }else if (this.sleep === 7) {
      this.avgLifeExpect += 10;
    }
  }
}