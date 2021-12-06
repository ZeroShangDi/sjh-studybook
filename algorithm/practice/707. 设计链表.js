// https://leetcode-cn.com/problems/design-linked-list/

var MyLinkedList = function() {
    this.cnt = 0
    this.head = null
    this.tail = null
};

var NodeList = function(val, next) {
    this.val = val || 0
    this.next = next || null
}

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index > this.cnt - 1) return -1
    // fix: this.head => this.head.val
    // msg: 返回的应该是值
    if (index === 0) return this.head.val
    if (index === this.cnt - 1) return this.tail.val
    let i = 0, node = this.head
    while(i !== index) {
        node = node.next
        i++
    }
    return node.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    if (this.head === null) {
        this.head = this.tail = new NodeList(val)
        this.cnt++
        return
    }
    let head = new NodeList(val, this.head)
    this.head = head
    this.cnt++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if (this.head === null) {
        this.head = this.tail = new NodeList(val)
        this.cnt++
        return
    }
    let tail = new NodeList(val)
    this.tail.next = tail
    this.tail = tail
    this.cnt++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    // fix: this.cnt - 1 => this.cnt
    // errorMsg: index大于链表长度时, 返回
    if (index > this.cnt) return false
    if (index <= 0) return this.addAtHead(val)
    if (index === this.cnt) return this.addAtTail(val)
    // 找到第 index - 1 个节点
    let node = this.head, i = 0
    while(i < index - 1) {
        node = node.next
        i++
    }
    // 插入
    let new_node = new NodeList(val)
    let next = node.next
    node.next = new_node
    new_node.next = next
    this.cnt++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index > this.cnt - 1) return
    if (index === 0) {
        let next = this.head.next
        this.head = next
        this.cnt--
        return
    }
    // 找到第 index - 1 个节点
    let node = this.head, i = 0
    while(i < index - 1) {
        node = node.next
        i++
    }
    // 删除
    let next = node.next
    node.next = next.next
    if (index === this.cnt - 1) {
        this.tail = node
    }
    this.cnt--
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */