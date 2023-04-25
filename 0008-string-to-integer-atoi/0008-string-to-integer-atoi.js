/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
   const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;
  let i = 0;
  let sign = 1;
  let result = 0;

  // Skip leading whitespace
  while (s[i] === ' ') {
    i++;
  }

  // Check for sign
  if (s[i] === '-' || s[i] === '+') {
    sign = s[i] === '-' ? -1 : 1;
    i++;
  }

  // Convert digits to integer
  while (i < s.length && s[i] >= '0' && s[i] <= '9') {
    result = result * 10 + (s[i] - '0');
    i++;
  }

  // Apply sign
  result *= sign;

  // Clamp to 32-bit integer range
  if (result > INT_MAX) {
    return INT_MAX;
  } else if (result < INT_MIN) {
    return INT_MIN;
  } else {
    return result;
  }
};