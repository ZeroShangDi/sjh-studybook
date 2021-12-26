// https://leetcode-cn.com/problems/k-closest-points-to-origin/

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 var kClosest = function(points, k) {
    // return points.map(([x, y]) => Math.abs(x) ** 2 + Math.abs(y) ** 2).sort((x, y) => x - y)
    return points
    .sort(([x1, y1], [x2, y2]) => {
        let l1 = Math.abs(x1) ** 2 + Math.abs(y1) ** 2
        let l2 = Math.abs(x2) ** 2 + Math.abs(y2) ** 2
        return l1 - l2
    })
    .slice(0, k)
};