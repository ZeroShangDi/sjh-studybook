// https://leetcode-cn.com/problems/sort-characters-by-frequency/

/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
    // 06:24
    // 思路: 
    // let qs = Array.from(new Set(s.split('')))
    // console.log(qs)

    let o = Object.create({})
    for(let i=0; i<s.length; i++) {
        if (o[s[i]] === undefined) o[s[i]] = 0
        o[s[i]] += 1
    }
    return Object.keys(o)
    .map(k => {
        return [k, o[k]]
    })
    .sort(([k1, n1], [k2, n2]) => {
        return n2 - n1
    })
    .map(([k, n]) => {
        return new Array(n).fill(k).join('')
    })
    .join('')
};