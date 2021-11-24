// https://leetcode-cn.com/problems/reverse-linked-list/submissions/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if (head === null || head.next === null) return head
    // 迭代
    let node = head, ans = new ListNode()
    while(node) {
        let next = ans.next
        ans.next = new ListNode(node.val, next)
        node = node.next
    }
    return ans.next
    // 递归
    // let newHead = reverseList(head.next)
    // let node = newHead
    // while(node.next) node = node.next
    // node.next = head
    // head.next = null
    // return newHead
};