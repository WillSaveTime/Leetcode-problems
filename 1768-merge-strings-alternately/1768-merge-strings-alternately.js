/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = "";
    
    if (word1.length <= word2.length) {
        for (let i = 0; i < word1.length; i++) {
            result += word1[i].concat(word2[i]);
        }
        result = result.concat(word2.slice(word1.length, word2.length))
    } 
    if (word1.length > word2.length) {
        for (let i = 0; i < word2.length; i++) {
            result += word1[i].concat(word2[i]);
        }
        console.log(result, word1.slice(word2.length, word1.length))
        result = result.concat(word1.slice(word2.length, word1.length))
    }
    return result;
};