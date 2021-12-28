// https://leetcode-cn.com/problems/number-of-provinces/

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
 var findCircleNum = function(isConnected) {
    let n = isConnected.length
    let u = new UnionFind(n)
    let cnt = n
    for(let i=0; i<n; i++) {
        for(let j=0; j<i; j++) {
            if (isConnected[i][j] === 1) {
                cnt -= u.merge(i, j)
            }
        }
    }
    return cnt
};

function UnionFind (n) {
    this.fa = new Array(n + 1)
    for(let i=0; i<=n; i++) {
        this.fa[i] = i
    }
}

UnionFind.prototype.find = function(x) {
    if (this.fa[x] !== x) {
        this.fa[x] = this.find(this.fa[x])
    }
    return this.fa[x]
}

UnionFind.prototype.merge = function(x, y) {
    let fx = this.find(x)
    let fy = this.find(y)
    if (fx === fy) return 0
    this.fa[fx] = fy
    return 1
}
