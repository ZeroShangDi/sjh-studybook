// https://leetcode-cn.com/problems/longest-consecutive-sequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    if (!nums.length) return 0
    nums = Array.from(new Set(nums))
    console.log(nums)
    let u = new UnionFind(nums.length)
    for(let i=0; i<nums.length; i++) {
        let j = nums.indexOf(nums[i] + 1)
        if (j !== -1) u.merge(i, j)
    }
    const o = u.print(nums)
    return Math.max(...Object.values(o).map(v => v.cnt))
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
    console.log(o)
    return o
}