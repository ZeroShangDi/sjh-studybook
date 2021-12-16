// https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    if (root === null) return []
    // 迭代
    let ans = []
    let quenu = [root]
    while(quenu.length) {
        let node = quenu.shift()
        ans.push(node.val)
        quenu = node.children.concat(quenu)
    }
    return ans
    // 递归
    return [
        root.val,
        ...root
            .children
            .map(v => preorder(v))
            .reduce((total, item) => total.concat(item), [])
    ]
};