// https://leetcode-cn.com/problems/backspace-string-compare/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    let a = [], b = []
    for(let i=0; i<s.length; i++) {
        s[i] === '#' ? a.pop() : a.push(s[i])
    }
    for(let i=0; i<t.length; i++) {
        t[i] === '#' ? b.pop() : b.push(t[i])
    }
    return a.join() === b.join()
};