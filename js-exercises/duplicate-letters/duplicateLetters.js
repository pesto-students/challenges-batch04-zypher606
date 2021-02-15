function duplicateLetters(str) {
  const freq = {};
  for (const char of str) {
    if (char in freq) freq[char] += 1;
    else freq[char] = 1;
  }

  let result = 1;
  for (const elem in freq) {
    if (freq[elem] > result) result = freq[elem];
  }
  if (result === 1) return false;
  return result;
}

export {
  duplicateLetters,
};
