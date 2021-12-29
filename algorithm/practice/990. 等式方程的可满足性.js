// https://leetcode-cn.com/problems/satisfiability-of-equality-equations/

/**
 * @param {string[]} equations
 * @return {boolean}
 */
 var equationsPossible = function(equations) {
    // 方法一
    const u = new UnionFind(26)
    const getCode = s => s.charCodeAt() - 97
    equations.sort((a, b) => b[1].charCodeAt() - a[1].charCodeAt())
    return equations.every( ([x, z, , y]) => {
        if (z === '!') return u.find(getCode(x)) !== u.find(getCode(y))
        u.merge(getCode(x), getCode(y))
        return true
    })

    // 方法二
    // let notEquals = []
    // const u = new UnionFind(26)
    // const getCode = s => s.charCodeAt() - 97

    // for(let i=0; i<equations.length; i++) {
    //     let [x, z, , y] = equations[i]
    //     if (z == '=') { u.merge(getCode(x), getCode(y)) }
    //     else { notEquals.push([getCode(x), getCode(y)]) }
    // }
    // return notEquals.every(([x, y]) => u.find(x) !== u.find(y))
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