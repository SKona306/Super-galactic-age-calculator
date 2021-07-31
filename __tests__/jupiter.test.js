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
});