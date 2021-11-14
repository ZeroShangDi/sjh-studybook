// https://leetcode-cn.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    // 优先队列-插入排序
    // 优先队列-堆
    let heap = new Heap(nums, k)
    return heap.front()
};

function Heap(nums, k) {
    // 频率的修改
    this.k = k
    this.o = {}
    for(let num of nums) {
        if (this.o[num]) {
            this.o[num] += 1
        } else {
            this.o[num] = 1
        }
    }
    this.sum = function(ind) {
        return this.o[this.heap[ind]]
    }
    this.front = function() {
        return this.heap.slice(0, this.k)
    }
    this.isfull = function(num) {
        // 判满操作: 没满的都要
        if (this.heap.length < this.k) return false
        // 判小操作: 太小直接不要
        if (this.o[num] < this.o[this.heap[0]]) return true
        // 删除操作: 满了并且新值不小,先删再插
        this.delete()
        return
    }
    // 初始化
    this.init(Object.keys(this.o))
}

Heap.prototype.init = function(nums) {
    // 1.插入式建堆 时间复杂度: nlogn (浪费空间)
    this.heap = []
    for(let num of nums) {
        if (this.isfull(num)) continue
        this.insert(num)
    }
    // 2.原地建堆(下沉式建堆)
    // 说明: 对非叶子节点进行下沉
    // [n/2, n] 全部是叶子节点
}

Heap.prototype.insert = function(num) {
    this.heap.push(num)
    // 上浮操作
    let ind = this.size() - 1 // 当前节点下标
    let idx = Math.floor((ind - 1) / 2) // 当前节点的父节点
    while(ind && this.sum(ind) < this.sum(idx)) {
        this.swap(ind, idx)
        ind = idx
        idx = Math.floor((ind - 1) / 2)
    }
}

Heap.prototype.delete = function() {
    if (this.size() === 0) return
    this.swap(0, this.size() - 1)
    let item = this.heap.pop()
    // 下沉操作
    let ind = 0
    let left = ind * 2 + 1
    let right = ind * 2 + 2
    while(left <= this.size() - 1) {
        let min = ind
        if (this.sum(min) > this.sum(left)) min = left
        if (this.sum(min) > this.sum(right)) min = right
        if (min === ind) return item
        this.swap(ind, min)
        ind = min
        left = ind * 2 + 1
        right = ind * 2 + 2
    }
    return item
}

Heap.prototype.size = function() {
    return this.heap.length
}

Heap.prototype.swap = function(i, j) {
    let item = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = item
}