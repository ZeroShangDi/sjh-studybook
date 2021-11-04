const { Stack } = require('../src/index.js')

/**
 * ()()(()dak(222)dao)(
 * 题目: 检测下面字符串中的括号是否一一对应
 *
 * 解题思路:
 *  1、遇到 ( 入栈, 遇到 ) 出栈
 *  2、循环结束判断栈的长度是否为 0
 */
function calc_str(str) {
  let stack = new Stack()
  for (let index = 0; index < str.length; index++) {
    const element = str[index]
    if (element == '(') {
      stack.push(element)
    }
    if (element == ')') {
      stack.pop()
    }
  }
  return stack.size() === 0
}

// false
console.log(calc_str('()()(()dak(222)dao)('))
