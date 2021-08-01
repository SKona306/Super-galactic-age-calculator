import { AvgLifeExpect } from "../src/avgLifeExpect";
import { JupiterAge } from "../src/jupiter";

describe('JupiterAge', () => {

  test('should correctly take users age (earth years) and return users age in Jupiter years.', () => {
    let jupiter = new JupiterAge(24);
    jupiter.calculateJupiterAge();
    expect(jupiter.ageOnJupiter).toEqual(2);
  });
  test('if users jupiter age is rounded to 0 then it should make users jupiter age 1', () => {
    let jupiter = new JupiterAge(1);
    jupiter.calculateJupiterAge();
    expect(jupiter.ageOnJupiter).toEqual(1);
  });
  test('should find the difference between users life expectancy and jupiter age and return how many years over or under they are', () => {
    let jupiter = new JupiterAge(24);
    let lifeExpectancy = new AvgLifeExpect("male", "active", true, true, "hs", 6)
    jupiter.aboveOrBelowLifeExpectancy(lifeExpectancy);
    expect(jupiter.aboveOrBelowLifeExpectancy).toEqual(70);

  });
});