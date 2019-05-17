const swap = (array, start, end) => {
  [array[start], array[end]] = [array[end], array[start]];
};

const reverse = (array, start, end) => {
  while (start < end) {
    swap(array, start, end);
    start++;
    end--;
  }
};

export const nextPermutation = (array) => {
  // loop from back to front 
    // find the pivot 
    // (ie first number to left that is less than number on right)

  let i = array.length - 1;
  while (i > 0 && array[i - 1] >= array[i]) {
    i--;
  }
  // if the entire array is sorted in descending order
    // return the array reversed in its ascending lexicographical order
    // (ie next permutation)
  if (i <= 0) return array.reverse();
  
  // find the first element on rightmost side that is greater than the pivot
    // then swap the pivot and that rightmost element
  let j = array.length - 1;
  while (array[j] <= array[i - 1]) {
    j--;
  }
  swap(array, i-1, j);
  
  // reverse the descending order suffix to 
  // its ascending lexicographic order (ie next permutation)
  j = array.length - 1;
  reverse(array, i, j);
  
  return array;
};