// https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci/

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
 * @return {number}
 */
 let i = 0
 var kthToLast = function(head, k) {
     // 递归
 
     // 双指针(快慢指针)
     let a = head
     while(k) {
         k--
         a = a.next
     }
     let b = head
     while(a) {
         a = a.next
         b = b.next
     }
     return b.val
     // 入栈后出栈
     // let stack = []
     // let node = head
     // let ans = null
     // while(node) {
     //     stack.push(node.val)
     //     node = node.next
     // }
     // while(k) {
     //     ans = stack.pop()
     //     k--
     // }
     // return ans
 };