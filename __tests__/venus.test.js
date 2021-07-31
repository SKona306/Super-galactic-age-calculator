

describe('venusAge', () => {

  test('shoul correctly take in users age(earth years) and return users age in venus years.', () => {
    let venus = new venusAge();
    venusAge.calculateVenusAge(24);
    expect(venus.venusAge).toEqual(39);
  });
});