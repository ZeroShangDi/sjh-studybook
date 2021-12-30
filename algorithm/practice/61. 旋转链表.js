// https://leetcode-cn.com/problems/rotate-list/

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
 var rotateRight = function(head, k) {
    if (head === null || k === 0) return head
    let node = head, i = 0, len = 1
    // 第一次循环遍历 计算下链表的长度, 同时得到链表的末尾, 供我们构建环
    while(node.next) { node = node.next; len++ }
    node.next = head // 环状链表
    while(i !== k % len) {
        i--
        if (i < 0) i = len - 1
        node = node.next
    }
    let ans = node.next
    node.next = null
    return ans
    // if (head === null || k === 0) return head
    // let node = head, i = 0, len = 1
    // while(node.next) { node = node.next; len++ }
    // node.next = head // 闭环
    // while(i !== k % len) {
    //     i--
    //     if (i < 0) i = len - 1
    //     node = node.next 
    // }
    // let ans = node.next
    // node.next = null
    // return ans
};
