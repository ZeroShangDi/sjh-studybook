// https://leetcode-cn.com/problems/partition-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
    let star = new ListNode()
    let ende = new ListNode()
    let l = star, r = ende
    let node = head
    while(node) {
        if (node.val < x) {
            l.next = new ListNode(node.val)
            l = l.next
        } else {
            r.next = new ListNode(node.val)
            r = r.next
        }
        node = node.next
    }
    l.next = ende.next
    return star.next
};