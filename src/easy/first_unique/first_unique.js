export const firstUnique = (str) => {
  let hash = {};
  for (let char of str) {
    hash[char] = (hash[char] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (hash[char] === 1) return i;
  }

  return -1;
};