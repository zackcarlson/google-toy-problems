import { validMountain } from './valid_mountain.js';

describe('validMountain', () => {
  it('should return true for a valid mountain array',  () => {
    expect(validMountain([0,3,2,1])).toBe(true);
    expect(validMountain([0,1,2,3,4,2,1])).toBe(true);
  });

  it('should return false for an invalid mountain', () => {
    expect(validMountain([3,5,5])).toBe(false);
    expect(validMountain([1,2,3,4,5])).toBe(false);
  });
});