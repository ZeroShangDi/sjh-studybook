// https://leetcode-cn.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    // 思路1: 创建一个对象, 用节点的指针值作为key, 当遍历到的节点在对象中已经存在时, 则证明有环
    // 思路2: 快慢指针, 创建两个指针, 快指针每次走两步, 慢指针每次走一步, 当两个指针指向同一个节点的时候, 则证明有环, 否则当快指针遍历到末尾的时候, 则证明无环
      let f = head // 快
      let s = head // 慢
      while(f && f.next) {
          f = f.next.next
          s = s.next
          if (f === s) return true
      }
      return false
  };