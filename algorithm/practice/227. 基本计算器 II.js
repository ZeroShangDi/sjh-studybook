// https://leetcode-cn.com/problems/basic-calculator-ii/
/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
    // 数值栈 and 符号栈
    // 如果数值是多位的怎么搞?
    // 如果碰到 ‘23’ 或者 b里面还有值的情况, 可以通过多循环一次解决
    let a = [], b = [], c = '', d = s + '#'
    for(n of d) {
        if (n === ' ') continue
        if (!level(n)) {
            c += n
            continue
        }
        a.push(Number(c))
        c = ''
        while (b.length && level(b[b.length-1]) >= level(n)) {
            let y = a.pop()
            let x = a.pop()
            let z = b.pop()
            a.push(calc(x, z, y))
        }
        b.push(n)
    }
    return a[0]
};

var level = function(s) {
    return {
        '#': -1,
        '*': 2,
        '/': 2,
        '+': 1,
        '-': 1
    }[s] || 0
}

var calc = function(x, z, y) {
    // 注意顺序
    switch(z) {
        case '+': return x + y
        case '-': return x - y
        case '*': return x * y
        case '/': return Math.floor(x / y)
    }
}