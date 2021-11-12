// https://leetcode-cn.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    // 思路: 
    s = s.split('')
    t = t.split('')
    while(s.length) {
        let n = s.pop()
        let index = t.indexOf(n)
        if (index === -1) return false
        t.splice(index, 1) 
    }
    return true && !t.length
};