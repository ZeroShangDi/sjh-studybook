// https://leetcode-cn.com/problems/reverse-linked-list-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    // 思路 翻转改变next
    if (left === right) return head
    if (head === null || head.next === null) return head
    let node = head, i = 1
    let pre = null, rear = null
    while(i < right) {
        if (i === left - 1) pre = node
        if (i >= left) node.next.pre = node
        node = node.next
        i++
    }
    rear = node.next
    if (pre) {
        pre.next = node
    } else {
        head = node
    }
    while(node.pre) {
        node.pre.next = null
        node.next = node.pre
        console.log(node)
        delete node.pre
        node = node.next
    }
    node.next = rear
    return head
};