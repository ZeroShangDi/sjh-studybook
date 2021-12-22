// https://leetcode-cn.com/problems/symmetric-tree/

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
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    var dfs = function(left, right) {
        if (!left && !right) return true
        if (!left || !right) return false
        if (left.val !== right.val) return false
        return dfs(left.left, right.right) && dfs(left.right, right.left)
    }
    if (root === null) return true
    return dfs(root.left, root.right)


    // if (root === null) return true

    // if (!root.left && !root.right) return true
    // if (!root.left || !root.right) return false
    // if (root.left.val !== root.right.val) return false

    // if (!root.left.left && !root.right.right) return true
    // if (!root.left.left || !root.right.right) return false
    // if (root.left.left.val !== root.right.right.val) return false

    // if (!root.left.right && !root.right.left) return true
    // if (!root.left.right || !root.right.left) return false
    // if (root.left.right.val !== root.right.left.val) return false

    // return isSymmetric(root.left) && isSymmetric(root.right)


    // 3 4 2 4 3 2 1
    // 1 2 3 4 2 4 3
    // 左 右 根 === 根 左 右
    // if (root === null) return []
    // var dfsL = function(root) {
    //     if (root === null) return []
    //     return [
    //         ...dfsL(root.left),
    //         ...dfsL(root.right),
    //         root.val
    //     ]
    // }
    // var dfsR = function(root) {
    //     if (root === null) return []
    //     return [
    //         root.val,
    //         ...dfsR(root.left),
    //         ...dfsR(root.right),
    //     ]
    // }
    // var L = dfsL(root)
    // var R = dfsR(root)
    // console.log(L, R)
    // return L.reverse().every((v, i) => v === R[i])
};