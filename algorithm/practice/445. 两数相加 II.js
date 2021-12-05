// https://leetcode-cn.com/problems/add-two-numbers-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    // 一、翻转链表 + 累加 + 翻转 (3n + t)
    // 二、记录位数
    // 三、栈
    let stack1 = [], stack2 = [], ans = new ListNode()
    let n1 = l1, n2 = l2
    while(n1) { stack1.push(n1.val); n1 = n1.next; }
    while(n2) { stack2.push(n2.val); n2 = n2.next; }
    while(stack1.length || stack2.length) { 
        // 插入到ans中
        let a = stack1.length ? stack1.pop() : 0
        let b = stack2.length ? stack2.pop() : 0
        let num = a + b
        let x = Math.floor(num / 10)
        let y = num % 10
        if (stack1.length && x) {
            stack1[stack1.length - 1] += x
        } else if (x) {
            stack1.push(x)
        }
        let node = new ListNode(y)
        node.next = ans.next
        ans.next = node
    }
    return ans.next
};