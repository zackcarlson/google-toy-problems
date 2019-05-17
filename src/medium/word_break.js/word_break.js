export const wordBreak = (str, wordDict) => {
  let checked = new Set();
  let queue = [''];
  
  while (queue.length > 0) {
      let base = queue.shift();
      for (let possibleNextWord of wordDict) {
        let possibleStr = base + possibleNextWord;
        if (possibleStr === str) return true;
        if (str.indexOf(possibleStr) === 0 && !checked.has(possibleStr)) {
          checked.add(possibleStr);
          queue.push(possibleStr);
        }
      }
  }
  return false;
};