// https://leetcode-cn.com/problems/swapping-nodes-in-a-linked-list/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var swapNodes = function(head, k) {
    // 1、找到第k个节点
    // 2、找到倒数第k个节点
    // 3、对两个节点进行互换
    // 4、返回头节点
    if (head === null || head.next == null) return head
    let star = head
    let ende = head
    let node = head
    let i = 1
    while(i < k) {
        i++
        node = node.next
    }
    star = node // 记录第k个
    while(node.next) {
        node = node.next
        ende = ende.next
    }
    let a = star.val
    let b = ende.val
    star.val = b
    ende.val = a
    return head
};