// https://leetcode-cn.com/problems/qJnOS7/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
    // TODO
    let len1 = text1.length, len2 = text2.length

    let s = new Array(len1 + 1)
        .fill(1)
        .map(() => new Array(len2 + 1).fill(0))

    for(let i=0; i<len1; ++i) {
        for(let j=0; j<len2; ++j) {
            if (text1[i] === text2[j]) {
                s[i+1][j+1] = s[i][j] + 1
            } else {
                s[i+1][j+1] = Math.max(s[i+1][j], s[i][j+1])
            }
        }
    }
    return s[len1][len2]
    // 1.找出共同的元素
    // 2.找出单调递增队列的最大值
    // const res = getIdenticalStrIdx(text1, text2)
    // const ans = getMaxDrabLength(res)
    // return ans
};

var getIdenticalStrIdx = function(text1, text2) {
    let res = []
    for(let i=0; i<text1.length; i++) {
        let s = ''
        for(let j=0; j<text2.length; j++) {
            if(text1[i] == text2[j]) {
                res.push(j)
                s += text1[i] + text2[j] + ' '
            } else {
                s += '-- '
            }
        }
        console.log(s)
    }
    return res
}

var getMaxDrabLength = function(res) {
    if (res.length === 0) return 0
    console.log(res)
    let s = new Array(res.length).fill(1)
    for(let i=1; i<res.length; i++) {
        for(let j=0; j<i; j++) {
            if (res[i] > res[j] && s[i] < s[j] + 1) {
                s[i] = s[j] + 1
            }
        }
    }
    return Math.max(...s)
    // let s = new Array(res.length)
    // for(let i=0; i<res.length; i++) {
    //     if (s.length === 0) {
    //         s.push(res[i])
    //         continue
    //     }
    //     if (res[i] > s[s.length - 1]) {
    //         s.push(res[i])
    //     }
    // }
    // return res.length
}