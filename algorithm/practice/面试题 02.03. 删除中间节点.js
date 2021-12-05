// https://leetcode-cn.com/problems/delete-middle-node-lcci/submissions/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
    let next = node.next
    node.val = next.val
    node.next = next.next
};