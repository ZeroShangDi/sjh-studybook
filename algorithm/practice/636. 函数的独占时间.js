// https://leetcode-cn.com/problems/exclusive-time-of-functions/

/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
 var exclusiveTime = function(n, logs) {
    let ans = new Array(n).fill(0)

    let pre = 0
    let stack = []
    for(let log of logs) {
        let l = log.split(':')
        // 向栈顶的ID中累加时间
        if (stack.length) {
            let idx = Number(stack[stack.length - 1])
            ans[idx] += (Number(l[2]) - pre + (l[1] == 'end'))
        }
        pre = Number(l[2]) + (l[1] == 'end')
        if (l[1] == 'start') stack.push(l[0])
        if (l[1] == 'end') stack.pop()
    }

    return ans
};