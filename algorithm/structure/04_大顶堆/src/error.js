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
    cnt = 0
    this.init(nums)
}

// 插入建堆
Heep.prototype.init = function (nums) {
    data = new Array(nums.length || maxn)
    for(let i=0; i<nums; i++) {
        this.push(nums[i])
    }
}

// 原地建堆
Heep.prototype.init = function () {

}

// 上浮操作(插入时)
Heep.prototype.up = function (idx) {
    if (!this.isHas(idx)) return false
    const f = (idx) => Math.floor((idx - 1) / 2) 
    
    let i = null
    while(i = f() && data[idx] > data[i]) {
        temp(i, idx)
    }
}

// 插入堆尾-把元素塞到屁股后面再提上来
Heep.prototype.push = function (item) {
    if (this.isFull()) return false
    data[cnt++] = item
    // 上浮操作(插入时)
    this.up(cnt - 1)
}

// 下沉操作(删除时)
Heep.prototype.down = function (idx) {
    let max = idx
    if (!this.isHas(idx)) return
    // 有子节点
    while (this.isHas(i * 2 + 1)) {
        if (data[max] < data[i * 2 + 1]) max = i * 2 + 1
        if (this.isHas(i * 2 + 2) && data[max] < data[i * 2 + 2]) {
            max = i * 2 + 2
        }
        if (max === idx) return true
        temp(max, idx)
    }
}

// 删除
Heep.prototype.pop = function (idx = 0) {
    // 把堆尾的薅上来再踢下去
    if (!this.isHas(idx)) return false
    let del = data[idx]
    data[idx] = data[--cnt]
    this.down(idx)
    return del
}

// 堆顶
Heep.prototype.top = function () {
    return data[0]
}

// 堆尾(废)
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

// 判满
Heep.prototype.isFull = function () {
    return cnt > data.length
}