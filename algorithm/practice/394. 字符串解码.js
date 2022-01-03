// https://leetcode-cn.com/problems/decode-string/

/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function(s) {
    let reg = /(\d+)\[([a-zA-Z]+)\]/g;
    while(s.includes('[')) {
        s = s.replace(reg, function(match, offset, string) {
            return new Array(Number(offset)).fill(string).join('')
        })
    }
    return s
    // let strs = []
    // let Num = /^[0-9]*$/
    // let Str = /^[a-b]*$/
    // for(let i=0; i<s.length; i++) {
    //     if (Num.test(s[i])) {
    //         let j = i + 2, k = 1
    //         while(k !== 0 && j < s.length) {
    //             if (s[j] === '[') k++
    //             if (s[j] === ']') k--
    //         }
    //         strs.push(new Array(Number(s[i])).fill(s.slice(i + 1, j)).join(''))
    //         i = j
    //     } else if (Str.test(s[i])) {
    //         strs.push(s[i])
    //     }
    // }
    // return strs.join('')
};