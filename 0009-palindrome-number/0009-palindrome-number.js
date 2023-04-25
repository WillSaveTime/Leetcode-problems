/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let sign = Math.sign(x);
    let x1 = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    if (x === x1) { return true }
    else { return false }
};