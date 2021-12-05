// https://leetcode-cn.com/problems/task-scheduler/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
 var leastInterval = function(tasks, n) {
    let max = 0, col = n + 1, o = {}
    for(let i=0; i<tasks.length; i++) {
        let k = tasks[i]
        if (!o[k]) o[k] = 0
        o[k] += 1
        if (o[k] > max) max = o[k]
    }
    let cnt = Object
        .values(o)
        .filter(num => num === max)
        .length - 1
    if (tasks.length >= max * col) return tasks.length
    return max * col - Math.min(max * col - tasks.length, n - cnt)
    // let o = {}, max = 0, col = n + 1
    // for(let i=0; i<tasks.length; i++) {
    //     let k = tasks[i]
    //     if (!o[k]) o[k] = 0
    //     o[k] += 1
    //     if (o[k] > max) max = o[k]
    // }
    // if (tasks.length >= max * col) return tasks.length
    // return max * col - (col - Math.floor(tasks.length / max))
};