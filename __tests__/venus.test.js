import { VenusAge } from "../src/venus";

describe('venusAge', () => {

  test('shoul correctly take in users age(earth years) and return users age in venus years.', () => {
    let venus = new VenusAge();
    venus.calculateVenusAge(24);
    expect(venus.ageOnVenus).toEqual(39);
  });
});