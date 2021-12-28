// https://leetcode-cn.com/problems/number-of-operations-to-make-network-connected/

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
 var makeConnected = function(n, connections) {
    let eqs = 0
    let u = new UnionFind(n)
    for(let i=0; i<connections.length; i++) {
        let [x, y] = connections[i]
        if (u.find(x) === u.find(y)) {
            eqs++
            // 连到另外一个没有的机器上
            // u.merge(x, getNotEqual())
        } else {
            u.merge(x, y)
        }
    }
    let cnt = -1
    for(let i=0; i<n; i++) {
        if (u.find(i) === i) cnt++
    }
    return (cnt > eqs) ? -1 : cnt
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