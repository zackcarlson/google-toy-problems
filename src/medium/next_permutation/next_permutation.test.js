import { nextPermutation } from './next_permutation.js';

describe('nextPermutation', () => {
  it('should return the next permutation', () => {
    expect(nextPermutation([1,2,3])).toEqual([1,3,2]);
    expect(nextPermutation([3,2,1])).toEqual([1,2,3]);
  });
});