import { VenusAge } from "../src/venus";
import { AvgLifeExpect } from "../src/avgLifeExpect";

describe('venusAge', () => {

  test('shoul correctly take in users age(earth years) and return users age in venus years.', () => {
    let venus = new VenusAge(24);
    venus.calculateVenusAge();
    expect(venus.ageOnVenus).toEqual(39);
  });
  test('should correctly find the difference between users venus age and life expectancy and return how far below', () => {
    let venus = new VenusAge(24);
    venus.calculateVenusAge();
    let lifeExpectancy = new AvgLifeExpect("male", "active", true, true, "hs", 6);
    lifeExpectancy.calculateAvgLifeExpectancy();
    venus.aboveOrBelowLifeExpectancy(lifeExpectancy);
    expect(venus.diffInExpectancyAndAge).toEqual(33);
  });
});