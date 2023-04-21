/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = Math.sign(x);
    let reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    
    if(reversed > 2 ** 31 - 1) {
        return 0;
    }
    return reversed * sign;
};