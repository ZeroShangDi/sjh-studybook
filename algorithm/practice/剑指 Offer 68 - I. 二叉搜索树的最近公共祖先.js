// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    // 左右根  
    // 1.首先判断两个元素在根的左树还是右树上，还是在根节点上
    //   根节点上直接就返回根节点
    //   都在左树就递归左树， 都在右树递归右树
    //   在两边的树上就返回当前所在的根节点所对应的树
    if (root === null) return null
    if (p.val > root.val && q.val < root.val) return root
    if (p.val < root.val && q.val > root.val) return root
    if (root.val === p.val || root.val === q.val) return root
    if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q)
    if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q)
 //    if (root === null) return null
 //    if (root.val === p || root.val === q) return root.val
 //    let l = lowestCommonAncestor(root.left, p, q)
 //    let r = lowestCommonAncestor(root.right, p, q)
 //    if (l === r) return l
 //    return root
 //    if (root.val === p || root.val === q) return root.val
 //    return lowestCommonAncestor(root.left, p, q) || lowestCommonAncestor(root.right, p, q)
 };