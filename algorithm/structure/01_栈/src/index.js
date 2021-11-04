module.exports.Stack = function Stack(size) {
  let items = new Array(size)

  // 入栈
  this.push = function (item) {
    if (this.size === size) return
    items.push(item)
  }

  // 出栈
  this.pop = function () {
    return items.pop()
  }

  // 栈顶元素
  this.top = function () {
    if (!items.length) {
      return null
    }
    return items[items.length - 1]
  }

  // 栈的大小
  this.size = function () {
    return items.length
  }

  // 是否空栈
  this.isEmpty = function () {
    return items.length === 0
  }

  // 清空栈
  this.clear = function () {
    items = []
  }
}


// 链表版的栈实际就是一个单向链表, head表示栈顶
function List(val = 0, next = null) {
  this.val = val
  this.next = next
}
module.exports.StackList = function Stack() {
  let size = 0
  let head = null

  // 入栈
  this.push = function (item) {
    head = new List(item, head)
    size = size + 1
  }

  // 出栈
  this.pop = function () {
    if (this.isEmpty()) return
    let val = head.val
    head = head.next
    size = size - 1
    return val
  }

  // 栈顶元素
  this.top = function () {
    if (this.isEmpty()) return -1
    return head.val
  }

  // 栈的大小
  this.size = function () {
    return size
  }

  // 是否空栈
  this.isEmpty = function () {
    return size === 0
  }

  // 清空栈
  this.clear = function () {
    head = null
  }
}
