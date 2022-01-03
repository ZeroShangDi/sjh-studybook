// https://leetcode-cn.com/problems/couples-holding-hands/

/**
 * @param {number[]} row
 * @return {number}
 */
 var minSwapsCouples = function(row) {
    let ans = 0
    for(let i=0; i<row.length; i=i+2) {
        let need = (row[i] % 2) ? (row[i] - 1) : (row[i] + 1)
        if (row[i+1] !== need) {
            let j = row.indexOf(need)
            temp(i + 1, j, row)
            ans++
        }
    }
    return ans
};

function temp (a, b, arr) { [arr[a], arr[b]] = [arr[b], arr[a]] } 