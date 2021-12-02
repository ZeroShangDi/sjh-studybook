// https://leetcode-cn.com/problems/validate-stack-sequences/

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function(pushed, popped) {
    let stack = []
    while(popped.length || popped.length) {
        if (!popped.length && pushed.length) return false
        if (!pushed.length && popped[0] !== stack[stack.length - 1]) return false
        if (popped[0] === stack[stack.length - 1]) {
            popped.shift()
            stack.pop()
        } else if(popped[0] === pushed[0]) {
            pushed.shift()
            popped.shift()
        } else {
            stack.push(pushed.shift())
        }
    }
    return !stack.length
};