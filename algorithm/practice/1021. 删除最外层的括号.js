// https://leetcode-cn.com/problems/remove-outermost-parentheses/

/**
 * @param {string} s
 * @return {string}
 */
 var removeOuterParentheses = function(s) {
    let x = 0, y = 0, r = '', n = ''
    for(let i=0; i<s.length; i++) {
        if (s[i] === '(') {
            x++
        } else {
            y++
        }
        n += s[i]
        if (x === y) {
            r += n.slice(1, n.length - 1)
            n = ''
        }
    }
    return r
};