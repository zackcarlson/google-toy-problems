export const validParens = (parens) => {
  let stack = [];
  let open = {'{':'}', '[': ']', '(': ')'};

  for (let i = 0; i < parens.length; i++) {
    let char = parens[i];
    if (open[char]) {
      stack.push(char);
    } else {
      if (open[stack.pop()] !== char) return false;
    }
  }

  return stack.length === 0;
};