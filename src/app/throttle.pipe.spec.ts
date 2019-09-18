import { ThrottlePipe } from './throttle.pipe';

describe('ThrottlePipe', () => {
  it('create an instance', () => {
    const pipe = new ThrottlePipe();
    expect(pipe).toBeTruthy();
  });
});
