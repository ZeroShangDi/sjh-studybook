// https://leetcode-cn.com/problems/binary-tree-postorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    if (root === null) return [] 
    // 思路: 左右根
    // 依旧是利用栈的特性, 在打印根后, 把左右入栈
    let ans = []
    let stack = [root]
    while(stack.length) {
        let node = stack.pop()
        ans.unshift(node.val)
        if (node.left) {
            stack.push(node.left)
        }
        if (node.right) {
            stack.push(node.right)
        }
    }
    return ans
    // return [
    //     ...postorderTraversal(root.left),
    //     ...postorderTraversal(root.right),
    //     root.val
    // ]
};
