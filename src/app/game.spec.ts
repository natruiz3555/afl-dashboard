import { Game } from './game';

describe('Game', () => {
  it('should create an instance', () => {
    expect(new Game(100, 0, '+11:00', 14, 'Richmond',
    14, 14, '2017-04-15 15:59:16', 1, 0, 89, 12, 'Richmond', 132, 'Carlton', 14, 'M.C.G.', 3, 20, 2017,
    '2017-03-23 19:20:00', 1)).toBeTruthy();
  });
});
