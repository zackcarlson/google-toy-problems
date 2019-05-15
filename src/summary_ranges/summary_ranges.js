export const summaryRanges = (nums) => {
  let res = [];
  if (nums.length === 1) {
    res.push(String(nums[0]));
    return res;
  }
  let start = 0, end = 0;
  let temp = "";
  
  while (end < nums.length) {
    if (start === end) temp += nums[start];
    let diff = Math.abs(nums[end] - nums[end+1]);
    
    if (diff === 1) {
      end++;
      continue;
    }
    
    if ( (diff > 1 || isNaN(diff)) && start === end) {
      end++;
      start++;
    } else {
      temp += `->${nums[end]}`;
      end++;
      start = end;
    }

    res.push(temp);
    temp = '';
  }
  
  return res;
};