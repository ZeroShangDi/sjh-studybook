// https://leetcode-cn.com/problems/buddy-strings/

var check = function(s) {
    // JS中不能使用 'a' - 'a' 来取下标
    // let cnt = new Array(26).fill(0)
    // for(let i=0; i<s.length; i++) {
    //     if (cnt[s[i] - 'a'] !== 0) return true
    //     cnt[s[i] - 'a']++
    // }
    // return false
    let c = Array.from(new Set(s.split(''))).join('')
    return c.length < s.length
}
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(a, b) {
    if (a.length !== b.length) return false
    if (a === b) return check(a)
    let i = 0, j = 0, k = 0
    for (let q = 0; q<a.length; q++) {
        if (a[q] !== b[q]) {
            k++
            if (k == 1) i = q
            if (k == 2) j = q
        }
    }
    return a[j] === b[i] && a[i] === b[j] && k === 2
    // 1、相等但有重复字符 2、不相等但只有两个不同且切换后相等 3、其他返回false
    // if (a.length !== b.length) return false
    // if (a === b) {
    //     let s = Array.from(new Set(a.split(''))).join('')
    //     if (s.length < a.length) return true
    //     return false
    // } else {
    //     let a1, a2, b1, b2
    //     for(let i=0; i<a.length; i++) {
    //         if (a[i] !== b[i]) {
    //             if (!a1) {
    //                 a1 = a[i]
    //                 b1 = b[i]
    //             } else if(!a2) {
    //                 a2 = a[i]
    //                 b2 = b[i]
    //                 if (a1 !== b2 || a2 !== b1) return false
    //             } else {
    //                 return false
    //             }
    //         }
    //     }
    //     return a2 ? true : false
    // }
};