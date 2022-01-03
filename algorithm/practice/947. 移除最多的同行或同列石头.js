// https://leetcode-cn.com/problems/most-stones-removed-with-same-row-or-column/

/**
 * @param {number[][]} stones
 * @return {number}
 */
 var removeStones = function(stones) {
    let n = stones.length
    let u = new UnionFind(n)
    let isPeer = ([x1, y1], [x2, y2]) => x1 === x2 || y1 === y2
    for(let i=0; i<n; i++) {
        for(let j=i; j<n; j++) {
            if (isPeer(stones[i], stones[j])) {
                u.merge(i, j)
            }
        }
    }
    let ans = 0
    let o = u.print(stones)
    let cnts = Object.values(o).map(v => v.cnt)
    for(let i=0; i<cnts.length; i++) {
        if (cnts[i] <= 1) continue
        ans += cnts[i] - 1
    }
    return ans
    // return Math.max(...Object.values(o).map(v => v.cnt)) - 1
};

function UnionFind (n) {
    this.fa = new Array(n + 1)
    this.cnt = new Array(n + 1)
    for(let i=0; i<=n; i++) {
        this.fa[i] = i
        this.cnt[i] = 0
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
    this.cnt[fy] += 1
    return 1
}

UnionFind.prototype.print = function (nums) {
    let o = Object.create({})
    for(let i=0; i<this.fa.length; i++) {
        let k = this.find(i)
        let v = nums ? nums[i] : i
        if (v === undefined) continue
        if (!o[k]) o[k] = { cnt: 0, vals: []}
        o[k].cnt += 1
        o[k].vals.push(v)
    }
    // 是头节点: u.find(i) === i
    // 头节点数: Object.keys(o).length - 1
    // 最大集合: Math.max(...Object.values(o).map(v => v.cnt))
    console.log(JSON.stringify(o))
    return o
}