// https://leetcode-cn.com/problems/reorder-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
    if (head === null) return head
    let stack = []
    let node = head
    while(node) { stack.push(node); node = node.next; }
    let x = Math.floor(stack.length / 2)
    let y = stack.length % 2
    let ans = new ListNode(), n = ans
    node = head
    while(x) {
        n.next = node
        node = node.next
        n = n.next
        n.next = stack.pop()
        n = n.next
        x--  
    }
    if (y) {
        n.next = node
        n = n.next
    }
    n.next = null
    return ans.next

    // 把剩下的节点做一个翻转
    // head.next = reorderList(turnNode(head.next))
    // return head

    // 1 [] 3 => 1 3 []
    // let next = head.next
    // let rear = head.next
    // while(rear.next) { rear = rear.next; }
    // let ende = rear.next
    // rear.next = null
    // ende.next = reorderList(next)
    // head.next = ende
    // return head
};

var turnNode = function(root) {
    let stack = []
    let node = root, ans = new ListNode()
    while(node) { stack.push(node); node = node.next; }
    node = ans
    while(stack.length) { node.next = stack.pop(); node = node.next; }
    node.next = null
    return ans.next
}