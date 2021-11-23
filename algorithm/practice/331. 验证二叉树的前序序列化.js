// https://leetcode-cn.com/problems/verify-preorder-serialization-of-a-binary-tree/
/**
 * @param {string} preorder
 * @return {boolean}
 */
 var isValidSerialization = function(preorder) {
    // 思路: 
    // 1. 我们将合法的二叉树用#号代替, 不断的替换之后最终合法的二叉树将只剩下一个#
    let reg = /\d{1,},#,#/g
    while(reg.test(preorder)) {
        preorder = preorder.replaceAll(reg, '#')
    }
    return preorder === '#'
};