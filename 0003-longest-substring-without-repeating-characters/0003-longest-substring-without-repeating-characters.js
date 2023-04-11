/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let end = 0;
    let maxLength = 0;
    let charDict = {};

    while (end < s.length) {
        if (s[end] in charDict && charDict[s[end]] >= start) {
            // Move start pointer to remove the duplicate character
            start = charDict[s[end]] + 1;
        }
        charDict[s[end]] = end;
        maxLength = Math.max(maxLength, end - start + 1);
        end++;
    }
    return maxLength;
};