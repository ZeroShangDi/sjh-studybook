// https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
    if (!head) return
    let i = 0
    let node = res = head
    while(i < k) {
        i++
        node = node.next
    }
    while(node) {
        node = node.next
        res = res.next
    }
    return res
};