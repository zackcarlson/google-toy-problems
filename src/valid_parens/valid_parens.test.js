import { validParens } from './valid_parens.js';

describe('validParens', () => {
  it('should return true for valid parens', () => {
    let input1 = '()[]{}';
    let input2 = '{[]}';
    expect(validParens(input1)).toBe(true);
    expect(validParens(input2)).toBe(true);
  });
  it('should return false for invalid parens', () => {
    let input1 = '([)]';
    let input2 = '(]';
    expect(validParens(input1)).toBe(false);
    expect(validParens(input2)).toBe(false);
  });
});