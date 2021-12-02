// https://leetcode-cn.com/problems/baseball-game/

/**
 * @param {string[]} ops
 * @return {number}
 */
 var calPoints = function(ops) {
    let stack = [], sum = 0
    for(let i=0; i<ops.length; i++) {
        let op = ops[i]
        switch(op) {
            case '+':
                let n = stack.pop()
                let l = stack.pop()
                stack.push(l, n, n + l)
                sum += n + l
                break
            case 'D':
                let s = stack.pop()
                stack.push(s, s * 2)
                sum += s * 2
                break
            case 'C':
                sum -= stack.pop()
                break
            default:
                stack.push(Number(op))
                sum += Number(op)
                break
        }
        console.log(stack)
    }
    return sum
};