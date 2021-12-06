// https://leetcode-cn.com/problems/partition-list-lcci/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
    // // 双指针
    // if (head === null) return head
    // let l = head, r = head.next
    // while(true) {
    //     if (r === null) return head
    //     while (l.val >= x) {
    //         l = l.next
    //     }
    //     while (r.val < x) {
    //         r = r.next
    //     }
    //     // 交换 l小 r大
    //     let s = l.val
    //     let b = r.val
    //     l.val = b
    //     r.val = s
    //     TODO
    // }
    // 两个链表
    let left = new ListNode()
    let right = new ListNode()
    let node = head, l = left, r = right
    while(node) {
        if (node.val < x) { l.next = new ListNode(node.val); l = l.next; }
        else { r.next = new ListNode(node.val); r = r.next; }
        node = node.next
    }
    l.next = right.next
    return left.next
};