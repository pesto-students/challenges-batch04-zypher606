function sumFibs(num) {
  if (num === 1) return 1;
  if (num === 2) return 2;

  const dp = [1, 1];

  for (let i = 2; dp[i - 1] + dp[i - 2] <= num; i += 1) {
    dp.push(dp[i - 1] + dp[i - 2]);
  }

  return dp.filter(i => i % 2 === 1).reduce((a, b) => a + b, 0);
}

const result = {};
function cacheFunction() {
  return (num) => {
    if (!result[num]) result[num] = sumFibs(num);
    return result[num];
  };
}

export { sumFibs, cacheFunction };
