import { Team } from './team';

describe('Team', () => {
  it('should create an instance', () => {
    expect(new Team('/wp-content/themes/squiggle/assets/images/Adelaide.jpg', 1, 'Adelaide', 'ADE')).toBeTruthy();
  });
});
