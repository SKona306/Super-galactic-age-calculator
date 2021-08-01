import { AvgLifeExpect } from "../src/avgLifeExpect";

describe('avgLifeExpect', () => {

  test('should correctly calculate users average life expectancy based on results of questionare.', () => {
    let lifeExpectancy = new AvgLifeExpect("male", "active", true, true, "hs", 6);
    lifeExpectancy.calculateAvgLifeExpectancy();
    expect(lifeExpectancy.avgLifeExpect).toEqual(72);
  });
  test('should correctly calculate users average life expectancy based on different results of questionare.', () => {
    let lifeExpectancy = new AvgLifeExpect("female", "very-active", false, false, "graduate", 4);
    lifeExpectancy.calculateAvgLifeExpectancy();
    expect(lifeExpectancy.avgLifeExpect).toEqual(87);
  });
  test('should correctly calculate users average life expectancy based on different results of questionare.', () => {
    let lifeExpectancy = new AvgLifeExpect("female", "active", false, false, "college", 5);
    lifeExpectancy.calculateAvgLifeExpectancy();
    expect(lifeExpectancy.avgLifeExpect).toEqual(88);
  });
});