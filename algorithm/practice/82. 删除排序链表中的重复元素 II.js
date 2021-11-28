// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/

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
 var deleteDuplicates = function(head) {
    let last = new ListNode(null, head)
    let node = last
    while(node.next && node.next.next) {
        // 有相同的就全部忽略
        // 没有相同的就直接去下一个
        if (node.next.val === node.next.next.val) {
            let val = node.next.val
            let next = node.next
            while(next && val === next.val) next = next.next
            node.next = next
        } else {
            node = node.next
        }
    }
    return last.next
    // let node = new ListNode(null, head)
    // let val = null, last = null
    // while(node && node.next) {
    //     if (node.val === node.next.val) {
    //         val = node.val
    //         node.next = node.next.next
    //     } else if (node.val === val) {
    //         val = null
    //         node = node.next
    //         if (last && last.next) last.next = last.next.next
    //     } else {
    //         last = node
    //         node = node.next
    //     }
    // }
    // return head

    // error
    // let val = null, node = head, ans = new ListNode()
    // let n = ans 
    // while(node) {
    //     if (val && val !== node.val) {
    //         n.next = new ListNode(val)
    //         n = n.next
    //     } else {
    //         val = node.val
    //     }
    //     node = node.next 
    // }
    // if (val && val !== n.val) {
    //     n.next = new ListNode(val)
    // }
    // return ans.next

    // error
    // let node = head
    // let val = null, last = null
    // while(node && node.next) {
    //     if (node.val === node.next.val) {
    //         val = node.val
    //         node.next = node.next.next
    //     } else if (node.val === val) {
    //         val = null
    //         node = node.next
    //         if (last && last.next) last.next = last.next.next
    //     } else {
    //         last = node
    //         node = node.next
    //     }
    // }
    // return head
};