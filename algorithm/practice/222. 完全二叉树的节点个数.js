// https://leetcode-cn.com/problems/count-complete-tree-nodes/

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
 * @return {number}
 */
 var countNodes = function(root) {
    if (!root) return 0
    // 方法1 判断左右树高度确定那颗数有残缺遍历残缺的树的节点数量 + 满二叉树的节点数量 + 根节点数量1
    // 方法2 递归
    return countNodes(root.left) + countNodes(root.right) + 1
};

var getNodeDeep = function(root, type = 'left') {
    let deep = 0, node = root
    while(node) {
        deep++
        node = (type === 'left') ? node.left : node.right
    }
    return deep
}