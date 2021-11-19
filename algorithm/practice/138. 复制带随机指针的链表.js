// https://leetcode-cn.com/problems/copy-list-with-random-pointer/


/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    if (!head) return null
    let p = null
    // 复制
    p = head
    while(p) {   
        let {val, next, random} =  p
        let q = new Node(val, next, random)
        p.next = q
        p = q.next
    }
    // 校准
    p = head.next
    while(p) {
        if (p.random) {
            p.random = p.random.next
        }
        p = p.next
        if (p) {
            p = p.next
        }
    }
    // 拆分
    let newHead = head.next
    p = head
    while(p) {
        let q = p.next
        p.next = q.next
        if (p.next) {
            q.next = p.next.next
        }
        p = p.next
    }
    return newHead
};