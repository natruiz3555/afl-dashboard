import { Ladder } from './ladder';

describe('Ladder', () => {
  it('should create an instance', () => {
    expect(new Ladder([1, 2, 3, 4, 5, 6, 7, 8], 2050)).toBeTruthy();
  });
});
