// https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
 var isSubStructure = function(A, B) {
    if (A == null || B == null) return false
    if (A.val === B.val && isEqual(A, B)) return true
    return isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

var isEqual = function(A, B) {
    if (B == null) return true
    if (A == null) return false
    if (A.val !== B.val) return false
    return isEqual(A.left, B.left) && isEqual(A.right, B.right)
}