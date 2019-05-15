import { summaryRanges } from './summary_ranges.js';

describe('summaryRanges', () => {
  it('should return the correct ranges', () => {
    let input = [0,1,2,4,5,7];
    let output = ['0->2','4->5','7'];

    expect(summaryRanges(input)).toEqual(output);
  });

  it('should return single string number if array length is 1', () => {
    let input = [4];
    let output = ['4'];

    expect(summaryRanges(input)).toEqual(output);
  });
});