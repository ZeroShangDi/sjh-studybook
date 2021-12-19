// https://leetcode-cn.com/problems/kth-largest-element-in-an-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    // 用时: 7h = 看视频1h + 写文章3h + 写代码2h + 改bug2h
    let h = new Heep(nums), ans = null
    while(k--) { ans = h.pop() }
    return ans
};

// 完全二叉树 -> 大顶堆
// 完全二叉树性质: 
//      下标从1开始, 左节点为 2i, 右节点为 2i + 1
//      [1, n/2] 一定不是叶子节点(n/2需要向下取整)
//      (n/2, n] 一定是叶子节点
// 堆的定义
//      1、基于完全二叉树
//      2、每个节点的值都大于(小于)子节点
// 其他
//      计算式
//      

const maxn = 100

// 笔记:
// 将这两个变量放在这里, 可以在模块化导出之后
// 防止外界通过实例化对象直接修改该变量而导致意外的错误
let cnt = 0, data = null

// 交换函数
const temp = (a, b) => [data[a], data[b]] = [data[b], data[a]]


/**
* @name 大顶堆
* @desc 根节点比左右大, 初始根节点下标: 0, 
*/
function Heep (nums) {
    cnt = 0, data = null
    this.init(nums)
}

// 插入建堆
Heep.prototype.init = function (nums) {
    data = new Array(nums.length || maxn)

    for(let i=0; i<nums.length; i++) {
        this.push(nums[i])
    }
}

// 插入堆尾
Heep.prototype.push = function (item) {
    // 把元素塞到屁股后面再提上来
    if (this.isFull()) return false
    data[cnt++] = item
    // 上浮操作(插入时)
    this.up(cnt - 1)
}

// 上浮操作(插入时)
Heep.prototype.up = function (i) {
    if (!this.isHas(i)) return
    const f = Math.floor((i - 1) / 2)
    if (data[i] > data[f]) {
        temp(i, f)
        this.up(f)
    }

    // let i = null, idx = cnt - 1
    // const f = (idx) => Math.floor((idx - 1) / 2)
    // while(data[idx] > data[i = f(idx)]) {
    //     temp(i, idx)
    //     idx = i
    // }
}

// 删除堆顶-先交换首尾, 删除尾, 首下沉
Heep.prototype.pop = function () {
    // 把堆尾的薅上来再踢下去
    if (this.isEmpty()) return false
    temp(0, --cnt)
    // 下沉操作(删除时)
    this.down(0)
    return data[cnt]
}



// 下沉操作(删除时)
Heep.prototype.down = function (i) {
    let max = i, l = i * 2 + 1, r = i * 2 + 2
    if (!this.isHas(l)) return
    if (data[l] > data[max]) max = l
    if (this.isHas(r) && data[r] > data[max]) max = r
    if (max !== i) {
        temp(max, i)
        this.down(max)
    }
}

// 堆顶
Heep.prototype.top = function () {
    return data[0]
}

// 堆尾
Heep.prototype.tail = function () {
    return data[cnt - 1]
}

// 长度
Heep.prototype.size = function () {
    return cnt
}

// 判有
Heep.prototype.isHas = function (idx) {
    return idx < cnt
}

// 判无
Heep.prototype.isEmpty = function () {
    return cnt === 0
}

// 判满
Heep.prototype.isFull = function () {
    return cnt === data.length
}