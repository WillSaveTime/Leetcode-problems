/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfArrays = function(s, k) {
   const MOD = 1e9 + 7;
  const n = s.length;
  const dp = new Array(n + 1).fill(0);
  dp[n] = 1;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === '0') {
      dp[i] = 0;
    } else {
      let num = 0;
      for (let j = i; j < n; j++) {
        num = num * 10 + Number(s[j]);
        if (num > k) {
          break;
        }
        dp[i] = (dp[i] + dp[j + 1]) % MOD;
      }
    }
  }
  return dp[0];

};