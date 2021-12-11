// https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    // 思路: 首先通过前序遍历得到根节点, 然后通过中序遍历获取左右节点
    if (!preorder.length) return null
    let rootVal = preorder[0]
    let rootIndex = inorder.indexOf(rootVal)
    let rootLeftInorder = inorder.slice(0, rootIndex)
    let rootRightInorder = inorder.slice(rootIndex + 1)
    let rootLeftPreorder = preorder.slice(1, rootLeftInorder.length + 1)
    let rootRightPreorder = preorder.slice(rootLeftInorder.length + 1)

    return new TreeNode(
        rootVal,
        buildTree(rootLeftPreorder, rootLeftInorder),
        buildTree(rootRightPreorder, rootRightInorder)
    )
};