import { AvgLifeExpect } from "../src/avgLifeExpect";

describe('avgLifeExpect', () => {

  test('should correctly calculate users average life expectancy based on results of questionare.', () => {
    let lifeExpectancy = new AvgLifeExpect("male", "active", true, true, "hs", 6);
    lifeExpectancy.calculateAvgLifeExpectancy();
    expect(lifeExpectancy.avgLifeExpect).toEqual(72);
  });
});