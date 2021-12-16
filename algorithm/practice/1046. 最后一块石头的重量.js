// https://leetcode-cn.com/problems/last-stone-weight/

/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
    if (stones.length < 2) return stones
    stones.sort((x, y) => x - y)
    while(stones.length > 1) {
        let y = stones.pop()
        let x = stones.pop()
        if (x == y) continue
        let z = y - x, i = 0
        while(z > stones[i]) i++
        stones.splice(i, 0, z)
    }
    return stones.length == 1 ? stones[0] : 0
};