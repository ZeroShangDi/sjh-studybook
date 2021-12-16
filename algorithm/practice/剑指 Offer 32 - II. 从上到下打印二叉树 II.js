// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if (!root) return []
    let stack = [root], ans = []
    while(stack.length) {
        stack = dfs(stack, ans)
    }
    return ans    
};

var dfs = function(stack, ans) {
    let nodes = [], vals = []
    while(stack.length) {
        let node = stack.shift()
        if (!node) continue
        vals.push(node.val)
        nodes.push(node.left, node.right)
    }
    if (vals.length) ans.push(vals)
    return nodes
}