// 数组实现
function Queue() {
  let items = []

  // 尾部追加元素
  this.enqueue = function (item) {
    items.push(item)
  }

  // 头部删除元素
  this.dequeue = function () {
    return items.shift()
  }

  // 返回队列头部
  this.head = function () {
    return items[0]
  }

  // 返回队列尾部
  this.tail = function () {
    return items[items.length - 1]
  }

  // 队列的大小
  this.size = function () {
    return items.length
  }

  // 是否空队列
  this.isEmpty = function () {
    return items.length === 0
  }

  // 清空队列
  this.clear = function () {
    items = []
  }

  // 打印
  this.print = function () {
    console.log(items)
  }
}

// 链表实现

module.exports = { Queue }
