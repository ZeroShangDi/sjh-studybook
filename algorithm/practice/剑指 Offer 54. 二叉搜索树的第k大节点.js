// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthLargest = function(root, k) {
    let rh = countNodes(root.right)
    if (rh == k - 1) return root.val
    if (rh >= k) return kthLargest(root.right, k)
    return kthLargest(root.left, k - rh - 1)
};

var countNodes = function(root) {
    if (!root) return 0
    return countNodes(root.left) + countNodes(root.right) + 1
};
