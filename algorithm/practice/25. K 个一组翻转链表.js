// https://leetcode-cn.com/problems/reverse-nodes-in-k-group/

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
 var reverseKGroup = function(head, k) {
    if (k === 1) return head
    let stack = new Array(k)
    let node = head
    let ans = new ListNode()
    let a = ans
    while(true) {
        // 入栈
        for(let i=0; i<k; i++) {
            if (node === null) {
                a.next = i > 0 ? stack[0] : null
                return ans.next
            }
            stack[i] = node
            node = node.next
        }
        // 出栈
        for(let i=k-1; i>=0; i--) {
            a.next = stack[i]
            a = a.next
        }
    }
    // 思路: 栈 空间复杂度: O(k)
    // if (k === 1) return head
    // let stack = new Array(k)
    // let node = head
    // let ans = new ListNode(0)
    // let a = ans
    // while(true) {
    //     for(let i=0; i<k; i++) {
    //         if (node === null) {
    //             a.next = i > 0 ? stack[0] : null
    //             return ans.next
    //         }
    //         stack[i] = node
    //         node = node.next
    //     }
    //     for(let i=k-1; i>=0; i--) {
    //         a.next = stack[i]
    //         a = a.next   
    //     }
    // }
};