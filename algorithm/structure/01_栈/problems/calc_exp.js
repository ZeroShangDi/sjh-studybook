const { Stack } = require('../src/index.js')

/**
 * [2, 4, 15, 5, '/', '+', '+']
 * 题目: 计算后缀表达式 (逆波兰表达式) 的结果:
 *
 * 解题思路:
 *  1、循环遍历、数字入栈、操作符不入栈
 *  2、遇到符号取出栈顶的两个数字、先出的在(运算符)右侧、后弹出的在(运算符)左侧、
 *  3、组合成字符串、使用eval运算、并将运算结果压入栈中
 *  4、继续向后遍历、直到结束、返回栈顶内容
 */

function calc_exp(exp) {
  let stack = new Stack()
  for (let index = 0; index < exp.length; index++) {
    const item = exp[index]
    if (['+', '-', '*', '/'].includes(item)) {
      let b = stack.pop()
      let a = stack.pop()
      let res = parseInt(eval(`${a} ${item} ${b}`))
      stack.push(res)
    } else {
      stack.push(item)
    }
  }
  return stack.top()
}

// 9
console.log(calc_exp([2, 4, 15, 5, '/', '+', '+']))
