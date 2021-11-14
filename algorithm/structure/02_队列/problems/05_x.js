const { Queue } = require('../src/index')
const { diffStringsRaw } = require('jest-diff')

/**
 * 题目: 迷宫问题
 * [
 *  [0, 0, 0, 1, 0, 1],
 *  [0, 0, 0, 1, 0, 1],
 *  [0, 0, 0, 1, 0, 1],
 *  [0, 0, 0, 1, 0, 1],
 *  [0, 0, 0, 1, 0, 1],
 * ]
 *    如上有一个二维数组、1表示不可通行、0表示可以通行、
 *    随机生成一个起始点[2, 3](不能为1)、和一个结束点[4, 5]、
 *    求是否能通行、以及能够通行的最短路径
 *
 * 思路:
 *    1、从起始点出发、将所有可通行的路径标记为1
 *    2、从上次标记的位置为起点、向四周散发、并标记为2
 *    3、如果周围都不可前进则放弃该路径
 *    4、如果到达结束点则该路径成功
 *    5、当所有路径都已走完时、从结束点向前寻找最短路径(数字最小的)
 */

// function getAdjionPointVal(point) {
//   // 获取相邻点的字符
//   let [a, b] = point
//   let top = a > 0 ? board[a - 1][b] : false // [a - 1, b]
//   let left = b > 0 ? board[a][b - 1] : false // [a, b - 1]
//   let right = b < length - 1 ? board[a][b + 1] : false // [a, b + 1]
//   let bottom = a < len - 1 ? board[a + 1][b] : false //[a + 1, b]
//   return [top, left, right, bottom]
// }

// function getPoint(code) {
//   // 获取该字符在二维表中的位置
//   let res = []
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < length; j++) {
//       let item = board[i][j]
//       if (code === item) {
//         res.push([i, j])
//       }
//     }
//   }
//   return res
// }

// function isAdjoin(point, code) {
//   // 比较两个点是否重合
//   let [a, b] = point
//   let top = a > 0 ? board[a - 1][b] : false // [a - 1, b]
//   let left = b > 0 ? board[a][b - 1] : false // [a, b - 1]
//   let right = b < length - 1 ? board[a][b + 1] : false // [a, b + 1]
//   let bottom = a < len - 1 ? board[a + 1][b] : false //[a + 1, b]
//   console.log('2222', point, code, top, left, right, bottom)
//   if (top == code) {
//     return [a - 1, b]
//   }
//   if (left == code) {
//     return [a, b - 1]
//   }
//   if (right == code) {
//     return [a, b + 1]
//   }
//   if (bottom == code) {
//     return [a + 1, b]
//   }
// }

// let keys = word.split('')
// let res = getPoint(keys.shift())
// let queues = res.map((item) => [item])

// console.log('res', res)

// for (let i = 0; i < res.length; i++) {
//   console.log('star')
//   let queue = queues[i]
//   let newKeys = [...keys]
//   while (newKeys.length) {
//     let ende = queue.slice(-1) // 上一个点
//     let code = newKeys.shift() // 下一个字符
//     let isExistence = isAdjoin(ende[0], code) // 有重合路径
//     if (isExistence) {
//       queue.push(isExistence)
//     } else {
//       newKeys.length = 0
//     }
//   }
//   if (queue.length === word.length) {
//     return true
//   }
// }
// return false

var dfs = function (board, word, k, i, j) {
  //
  let len = board.length
  let length = board[0].length
  let item = board[i][j]
  let code = word[k]
  if (i >= len || j >= length || i < 0 || j < 0 || item !== code) {
    return false
  }
  if (k == word.length - 1) {
    return true
  }

  board[i][j] = '#'
  ++k
  if (
    dfs(board, word, k, i, j + 1) ||
    dfs(board, word, k, i, j - 1) ||
    dfs(board, word, k, i + 1, j) ||
    dfs(board, word, k, i - 1, j)
  ) {
    return true
  }
  board[i][j] = item
  return false
}

var exist = function (board, word) {
  let len = board.length
  let length = board[0].length

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < length; j++) {
      if (dfs(board, word, 0, i, j)) {
        return true
      }
    }
  }

  return false
}

let a = exist(
  [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ],
  'SEE'
)
console.log(a)
