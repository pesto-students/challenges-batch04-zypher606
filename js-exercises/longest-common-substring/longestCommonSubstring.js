function longestCommonSubstring(str1, str2) {
  const s1 = [...str1]; // Col
  const s2 = [...str2]; // Row

  const dp = Array(s2.length + 1)
    .fill(null)
    .map(() => Array(s1.length + 1).fill(0));

  let maxSubstringLength = 0;
  // let maxSubstringRow = 0;
  let maxSubstringCol = 0;

  for (let rowIndex = 1; rowIndex <= s2.length; rowIndex += 1) {
    for (let colIndex = 1; colIndex <= s1.length; colIndex += 1) {
      // DP matrix setup
      if (s1[colIndex - 1] === s2[rowIndex - 1]) {
        dp[rowIndex][colIndex] = dp[rowIndex - 1][colIndex - 1] + 1;
      }

      // Valuesalues to extract substring at one Go
      if (dp[rowIndex][colIndex] > maxSubstringLength) {
        maxSubstringLength = dp[rowIndex][colIndex];
        // maxSubstringRow = rowIndex;
        maxSubstringCol = colIndex;
      }
    }
  }

  if (maxSubstringLength === 0) return '';

  return s1.slice(maxSubstringCol - maxSubstringLength, maxSubstringCol).join('');
}

export { longestCommonSubstring };
