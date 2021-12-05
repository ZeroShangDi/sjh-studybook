// https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/

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
    if(head === null) return head
    // 1.复制链表
    let node = head
    while(node) {
        node.next = new Node(node.val, node.next, node.random)
        node = node.next.next
    }
    // 2.重新定义random指向 7, 7', 13, 13', 1, 1', null
    node = head.next
    while(node) {
        node.random = node.random ? node.random.next : null
        node = node.next ? node.next.next : null
    }
    // 3.删除原链表
    let new_head = head.next
    node = head.next
    while(node) {
        // 重点!!!!!!!!!!!
        // q = p->next; // 复制的
        // p->next = q->next; // 
        // if (p->next) q->next = p->next->next;
        // p = p->next;

        let next = node.next
        node.next = next.next
        if (node.next) next.next = node.next.next
        node = node.next

        // 错误, 未找到原因
        // node.next = node.next ? node.next.next : null
        // node = node.next
    }
    return new_head
};