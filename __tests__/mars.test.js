

describe('marsAge', () => {

  test('should correctly take in users age (earth years) and return users age in mars years.', () => {
    let mars = new MarsAge();
    mars.calculateMarsAge(24);
    expect(mars.ageOnMars).toEqual(13);
  });
});