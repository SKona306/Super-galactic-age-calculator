import { JupiterAge } from "../src/jupiter";

describe('JupiterAge', () => {

  test('should correctly take users age (earth years) and return users age in Jupiter years.', () => {
    let jupiter = new JupiterAge(24);
    jupiter.calculateJupiterAge();
    expect(jupiter.ageOnJupiter).toEqual(2);
  });
});