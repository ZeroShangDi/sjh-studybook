// https://leetcode-cn.com/problems/lemonade-change/

/**
 * @param {number[]} bills
 * @return {boolean}
 */
 var lemonadeChange = function(bills) {
    let i = 0, j = 0
    for(m of bills) {
        if (m === 5) i++
        if (m === 10) {
            if (i === 0) return false
            j++
            i--
        }
        if (m === 20) {
            if (i > 0 && j > 0) {
                i--
                j--
            } else if (i > 3) {
                i -= 3
            } else {
                return false
            }
        }
    }
    return true
};