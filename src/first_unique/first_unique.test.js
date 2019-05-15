import { firstUnique } from './first_unique.js';

describe('firstUnique', () => {
  it('should return index of first non-repeating char', () =>{
    let input1 = 'leetcode';
    let input2 = 'loveleetcode';

    expect(firstUnique(input1)).toBe(0);
    expect(firstUnique(input2)).toBe(2);
  });

  it('should return -1 when there are no unique chars', () => {
    let input1 = 'hhttll';
    let input2 = 'noon';

    expect(firstUnique(input1)).toBe(-1);
    expect(firstUnique(input2)).toBe(-1);
  });
});