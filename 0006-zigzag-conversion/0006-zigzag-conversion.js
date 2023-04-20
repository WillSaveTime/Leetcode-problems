/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1 || s.length == 0) {
        return s;
    }
    
    const rows = new Array(numRows).fill("");
    
    let row = 0;
    let goingDown = false;
    
    for (let i = 0; i < s.length; i++) {
        rows[row] += s[i];
        
        if(row == 0 || row == numRows -1) {
            goingDown = !goingDown;
        }
        row += goingDown ? 1 : -1;
    }
    
    let result = "";
    for(let row of rows) {
        result += row;
    }
    return result;
};