function balancedBraces(str) {
  const left = ['{', '[', '('];
  const right = ['}', ']', ')'];

  const stack = [];
  for (const char of str) {
    if (left.includes(char)) {
      stack.push(char);
    }

    if (right.includes(char)) {
      const index = right.indexOf(char);
      const leftChar = left[index];
      const lastItem = stack.pop();
      if (lastItem !== leftChar) return false;
    }
  }

  if (stack.length === 0) return true;
  return false;
}

export {
  balancedBraces,
};
