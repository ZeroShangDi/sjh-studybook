// https://leetcode-cn.com/problems/linked-list-cycle-lcci/

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
    // 思路: 快慢指针
    let f = head, s = head
    while(f && f.next) {
        f = f.next.next
        s = s.next
        if (f === s) {
            f = head
            while(f !== s) {
                f = f.next
                s = s.next
            }
            return f
        }
    }
    return null
};