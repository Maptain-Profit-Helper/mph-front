import { MouseDB } from './mouse-db';

describe('MouseDB', () => {
  it('should create an instance', () => {
    expect(new MouseDB("", 0)).toBeTruthy();
  });
});
