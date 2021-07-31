
describe('JupiterAge', () => {

  test('should correctly take users age (earth years) and return users age in Jupiter years.', () => {
    let jupiter = new JupiterAge();
    jupiter.calculateJupiterAge(24);
    expect(jupiter.ageOnJupiter).toEqual(2);
  });
});