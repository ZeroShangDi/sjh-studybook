// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    // 同样还是双指针思想, 不过我们求倒数 n + 1 个节点, 然后通过这个节点删除倒数第n个节点
    // 于此同时, 为了防止我们第n个节点是头节点, 我们给它🏠一个新的头节点
    head = new ListNode(null, head)
    let f = head, s = head
    let i = 0, j = n + 1; 
    while(i<j) {
        i++; 
        f = f.next;
    }
    while(f) {
        f = f.next; 
        s = s.next;
    }
    s.next = s.next.next
    return head.next
};