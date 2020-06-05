import { Tip } from './tip';

describe('Tip', () => {
  it('should create an instance', () => {
    expect(new Tip(
      'Hawthorn',
      10,
      '-0.6606',
      '68.37',
      0,
      '2019-03-23 16:35:00',
      '58.99',
      3056,
      '68.37',
      'Adelaide',
      1,
      '26.99',
      1,
      'Squiggle',
      1,
      'Adelaide',
      1,
      '2019-03-23 19:10:02',
      'Adelaide Oval',
      2019
    )).toBeTruthy();
  });
});
