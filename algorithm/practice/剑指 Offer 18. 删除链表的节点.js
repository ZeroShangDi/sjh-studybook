// https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
    let new_head = new ListNode(0, head)
    let f = head, s = new_head
    while(f) {
        if (f.val === val) {
            s.next = f.next
            return new_head.next
        }
        f = f.next
        s = s.next
    }
    return null
};