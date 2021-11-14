const { Queue } = require('../src/index')

/**
 * 题目: 斐波那契数列
 *  前两项是 1 1、以后每一项都是前两项之和、即: f(n) = f(n-1) + f(n-2)
 *
 * 思路:
 *  1、使用一个[工具]队列放置 n-2 和 n-1、需要计算时删除并获取 n-2、同时获取 n -1 计算 f(n)
 *  2、将计算的 f(n) 添加到[工具]队列中、将被删除的 n-2 添加到结果队列中、计算下一个
 *
 * 思路: 递归
 */

function FibonacciSequence(n) {
  let res = new Queue()
  let queue = new Queue()

  // 初始化
  let i = n
  queue.enqueue(1)
  queue.enqueue(1)
  while (i > 0) {
    let best = queue.dequeue()
    let last = queue.tail()
    let num = best + last
    queue.enqueue(num)
    res.enqueue(best)
    i--
  }

  res.print()
  queue.print()
}

FibonacciSequence(19)

// ! 递归 TODO
let res = new Queue()
function Sequence(n) {
  if (n == 2) {
    return 1
  } else if (n == 1) {
    return 1
  } else {
    let num = Sequence(n - 1) + Sequence(n - 2)
    return num
  }
}

res.enqueue(Sequence(19))
res.print()
