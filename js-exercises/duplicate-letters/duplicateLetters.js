function duplicateLetters(...args) {
  const mStr = args[0];
  const obj = {};

  for (let i = 0; i < mStr.length; i += 1) {
    // eslint-disable-next-line no-unused-expressions
    obj[mStr[i]] ? obj[mStr[i]] += 1 : obj[mStr[i]] = 1;
  }

  const maxval = Object.values(obj).reduce((a, b) => ((a > b) ? a : b));

  if (maxval === 1) return false;

  return maxval;
}

export {
  duplicateLetters,
};
