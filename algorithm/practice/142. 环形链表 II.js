// https://leetcode-cn.com/problems/linked-list-cycle-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    // 入环: a 2a
    // 相遇:  
    if (head === null || head.next === null) {
        return null
    }
    let i = head, j = head
    while(j && j.next) {
        i = i.next
        j = j.next.next
        if (i === j) {
            j = head
            while(i !== j) {
                i = i.next
                j = j.next
            }
            return i
        }
    }
    return null
 };