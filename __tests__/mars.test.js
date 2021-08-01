import { AvgLifeExpect } from "../src/avgLifeExpect";
import { MarsAge } from "../src/mars";

describe('marsAge', () => {

  test('should correctly take in users age (earth years) and return users age in mars years.', () => {
    let mars = new MarsAge(24);
    mars.calculateMarsAge();
    expect(mars.ageOnMars).toEqual(13);
  });

  test('should correctly find the difference between mars age and life expectancy and return how many years under the user is' () => {
    let mars = new MarsAge(24);
    let lifeExpectancy = new AvgLifeExpect("male", "active", true, true, "hs", 6);
    mars.aboveOrBelowLifeExpectancy(lifeExpectancy);
    expect(mars.diffInExpectancyAndAge).toEqual(59);
  });
});