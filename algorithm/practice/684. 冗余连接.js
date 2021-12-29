// https://leetcode-cn.com/problems/redundant-connection/

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findRedundantConnection = function(edges) {
    let ans = null
    let u = new UnionFind(edges.length)
    for(let i=0; i<edges.length; i++) {
        let [x, y] = edges[i]
        let isEq = u.find(x) === u.find(y)
        isEq ? (ans = edges[i]) : u.merge(x, y)
    }
    return ans
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