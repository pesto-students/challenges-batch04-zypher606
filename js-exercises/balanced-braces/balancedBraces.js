function balancedBraces(expression) {
  const stack = [];
  const bracesMap = { '{': '}', '(': ')', '[': ']' };
  const startBraces = Object.keys(bracesMap);
  const endBraces = Object.values(bracesMap);
  for (const char of expression) {
    if (stack.length !== 0 && endBraces.includes(char)) {
      const lastItem = stack[stack.length - 1];
      if (bracesMap[lastItem] === char) stack.pop();
    } else if (startBraces.includes(char) || endBraces.includes(char)) {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

export {
  balancedBraces,
};
