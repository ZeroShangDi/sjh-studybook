var drinkSum = function (price) {
  let unit = 2 // 一瓶 2块
  let cap = 4 // 4个瓶盖 = 1瓶
  let bottle = 2 // 2个瓶身 = 1瓶

  let sum = parseInt(price / unit)
  let capNum = sum
  let botNum = sum

  while (capNum >= 4 || botNum >= 2) {
    let a = parseInt(capNum / 4)
    let b = parseInt(botNum / 2)
    capNum += a + b - 4 * a
    botNum += a + b - 2 * b
    sum += a + b
  }
  return sum
}
// 15
console.log(drinkSum(10))
