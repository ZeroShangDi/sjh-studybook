// https://leetcode-cn.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let w = grid[0].length, h = grid.length
    let u = new UnionFind(w * h)

    let idx = (x, y) => x * w + y

    for(let i=0; i<h; i++) { // i = 高度
        for(let j=0; j<w; j++) { // j = 宽度
            let os = grid[i][j]
            if (os === '0') continue

            // 判断右侧关系
            let r = j + 1
            if (r < w && grid[i][r] === '1') {
                u.merge(idx(i, j), idx(i, r))
            }

            // 判断下侧关系
            let d = i + 1
            if (d < h && grid[d][j] === '1') {
                u.merge(idx(i, j), idx(d, j))
            }
        }        
    }

    let cnt = 0
    for(let i=0; i<h; i++) {
        for(let j=0; j<w; j++) {
            if (grid[i][j] === '0') continue
            if (u.find(idx(i, j)) !== idx(i, j)) continue
            cnt++
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
