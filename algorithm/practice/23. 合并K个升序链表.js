// https://leetcode-cn.com/problems/merge-k-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    let head = new ListNode()
    let item = head
    while(true) {
        let minIdx = null, minVal = null
        for(let i=0; i<lists.length; i++) {
            let node = lists[i]
            if (node === null) continue
            if (minIdx === null) {
                minIdx = i
                minVal = node.val
            } else {
                if (minVal > node.val) {
                    minIdx = i
                    minVal = node.val
                }
            }
        }
        if (minIdx === null) {
            return head.next;
        } else {
            item.next = new ListNode(minVal)
            item = item.next
            lists[minIdx] = lists[minIdx].next
        }
    } 
};