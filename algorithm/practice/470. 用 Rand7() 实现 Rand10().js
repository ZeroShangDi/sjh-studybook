// https://leetcode-cn.com/problems/implement-rand10-using-rand7/

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
 var rand10 = function() {
    // error
    // let num = (rand7() - 1) * 7 + rand7();
    // // 如果在40以内，那就直接返回
    // if(num <= 40) return 1 + num % 10;
    // // 说明刚才生成的在41-49之间，利用随机数再操作一遍
    // num = (num - 40 - 1) * 7 + rand7();
    // if(num <= 60) return 1 + num % 10;
    // // 说明刚才生成的在61-63之间，利用随机数再操作一遍
    // num = (num - 60 - 1) * 7 + rand7();
    // if(num <= 20) return 1 + num % 10;

    // 映射
    let num = 41
    while(num > 40) {
        num = rand7() + (rand7() - 1) * 7
    }
    return 1 + (num - 1) % 10

    // 相乘 error
    // let a, b
    // while(a = rand7() > 6);
    // while(b = rand7() > 5);
    // let c = a % 2 ? 1 : 2
    // return c * b
};