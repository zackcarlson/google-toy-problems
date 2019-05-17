import { wordBreak } from './word_break.js';

describe('wordBreak', () => {
  it('should return true if given word can be chunked into dict words', () => {
    let inputs = ['leetcode', ['leet','code']];
    expect(wordBreak(inputs[0], inputs[1])).toBe(true);
  });

  it('should return false if word can\'t be chunked into dict words', () => {
    let inputs = ['catsandog', ['cats', 'dog', 'sand', 'and', 'cat']];
    expect(wordBreak(inputs[0], inputs[1])).toBe(false);
  });
});