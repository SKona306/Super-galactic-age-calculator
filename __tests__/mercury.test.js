import { AvgLifeExpect } from "../src/avgLifeExpect";
import { MercuryAge } from "../src/mercury";

describe('mercuryAge', () => {
  
  test('should correctly take in user age(earth years) and return age in mercury years.', () => {
    let mercury = new MercuryAge(24);
    mercury.calculateMercuryAge();
    expect(mercury.ageOnMercury).toEqual(100);
  });

  test('should correctly find the difference between users mercury age and life expectancy and return how far below', () => {
    let mercury = new MercuryAge(15);
    mercury.calculateMercuryAge();
    let lifeExpectancy = new AvgLifeExpect("male", "active", true, true, "hs", 6);
    lifeExpectancy.calculateAvgLifeExpectancy();
    mercury.aboveOrBelowLifeExpectancy(lifeExpectancy);
    expect(mercury.diffInExpectancyAndAge).toEqual(9);
  });
  test('should correctly find the difference between users mercury age and life expectancy and return how far above', () => {
    let mercury = new MercuryAge(24);
    mercury.calculateMercuryAge();
    let lifeExpectancy = new AvgLifeExpect("male", "active", true, true, "hs", 6);
    lifeExpectancy.calculateAvgLifeExpectancy();
    mercury.aboveOrBelowLifeExpectancy(lifeExpectancy);
    expect(mercury.diffInExpectancyAndAge).toEqual(-28);
  });
});