// https://leetcode-cn.com/problems/palindromic-substrings/

/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
    let cnt = 0
    for(let i=0; i<s.length; i++) {
        for(let j=i+1; j<=s.length; j++) {
            let str = s.slice(i, j)
            if (str === str.split('').reverse().join('')) cnt++
        }
    }
    return cnt
};