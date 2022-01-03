// https://leetcode-cn.com/problems/accounts-merge/

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
 var accountsMerge = function(accounts) {
    let l = accounts.length
    let u = new UnionFind(l)
    for(let i=0; i<l; i++) {
        for(let j=i; j<l; j++) {
            let n = isMerge(accounts[i], accounts[j])
            if (n) u.merge(i, j)
        }
    }
    let o = u.print(accounts)
    return Object.values(o).map(v => handleMerge(v.vals))
};

// 判断是否可以合并
var isMerge = function ([user1, ...emails1], [user2, ...emails2]) {
    for(let i=0; i<emails1.length; i++) {
        if (emails2.includes(emails1[i])) return true
    }
    return false
};

// 处理集合内的用户合并
var handleMerge = function (vals) {
    let user, emails = []
    for(let i=0; i<vals.length; i++) {
        let [user1, ...emails1] = vals[i]
        emails = emails.concat(emails1)
        !user && (user = user1) 
    }
    // 去重复、按字符 ASCII 顺序排列
    emails = Array.from(new Set(emails))
    emails = emails.sort()
    return [user, ...emails]
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