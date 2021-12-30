// https://leetcode-cn.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let a = RegExp(/\(\)/)
    let b = RegExp(/\[\]/)
    let c = RegExp(/\{\}/)
    while(a.test(s) || b.test(s) || c.test(s)) {
        s = s.replace('()', '')
        s = s.replace('[]', '')
        s = s.replace('{}', '')
    }
    return s === ''
};