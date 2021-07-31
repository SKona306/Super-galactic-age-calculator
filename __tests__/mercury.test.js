import { MercuryAge } from "../src/mercury";

describe('mercuryAge', () => {
  
  test('should correctly take in user age(earth years) and return age in mercury years.', () => {
    let mercury = new MercuryAge();
    mercury.calculateMercuryAge(24);
    expect(mercury.ageOnMercury).toEqual(100);
  });
});