// https://leetcode-cn.com/problems/design-front-middle-back-queue/

// 一、使用链表构造一个双向队列
// 二、维护一前一后两个队列、当插入中间时插入到前面队列的尾端
// 三、如果两个队列的差值过大、进行修复

// 链表
var Node = function(val, next, pre) {
    this.val = val || 0
    this.next = next || null
    this.pre = pre || null
}

Node.prototype.insertPre = function(val) {
    let pre = this.pre
    pre.next = new Node(val, this, pre)
    this.pre = pre.next
    return true
}

Node.prototype.insertNext = function(val) {
    let next = this.next
    this.next = new Node(val, next, this)
    next.pre = this.next
    return true
}

Node.prototype.delPre = function() {
    if (!this.pre) return
    let pre = this.pre
    let lastPre = pre.pre
    if (lastPre) {
        lastPre.next = this
        this.pre = lastPre
    } else {
        this.pre = null
    }
    return true
}

Node.prototype.delNext = function() {
    if (!this.next) return
    let next = this.next
    let lastNext = next.next
    if (lastNext) {
        this.next = lastNext
        lastNext.pre = this
    } else {
        this.next = null
    }
    return true
}

// 双向队列
var Queue = function() {
    this.cnt = 0
    this.head = new Node(0)
    this.tail = new Node(0)
    this.head.next = this.tail
    this.tail.pre = this.head
}

Queue.prototype.pushBack = function(val) {
    this.tail.insertPre(val)
    this.cnt++
}

Queue.prototype.pushFront = function(val) {
    this.head.insertNext(val)
    this.cnt++
}

Queue.prototype.popBack = function() {
    if (this.isEmpty()) return
    let val = this.tail.pre.val
    this.tail.delPre()
    this.cnt--
    return val
}

Queue.prototype.popFront = function() {
    if (this.isEmpty()) return
    let val = this.head.next.val
    this.head.delNext()
    this.cnt--
    return val
}

Queue.prototype.back = function() {
    return this.tail.pre.val
}

Queue.prototype.front = function() {
    return this.head.next.val 
}

Queue.prototype.isEmpty = function() {
    return !this.cnt
}

Queue.prototype.size = function() {
    return this.cnt
}

// 前中后队列
var FrontMiddleBackQueue = function() {
    this.last = new Queue()
    this.next = new Queue()
};

/** 
 * @desc 平衡前后两个队列的数量
 * @return {void}
 */
FrontMiddleBackQueue.prototype.optimization = function() {
    if(this.last.size() < this.next.size()) {
        this.last.pushBack(this.next.front())
        this.next.popFront()
    } else if(this.last.size() === this.next.size() + 2) {
        this.next.pushFront(this.last.back())
        this.last.popBack()
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
    this.last.pushFront(val)
    this.optimization()
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
    if (this.last.size() > this.next.size()) {  
        this.next.pushFront(this.last.back())
        this.last.popBack()
    }
    this.last.pushBack(val)
    this.optimization()
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
    this.next.pushBack(val)
    this.optimization()
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
    if (!this.last.size()) return -1
    let val = this.last.popFront()
    this.optimization()
    return val
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
    if (!this.last.size()) return -1
    let val = this.last.popBack()
    this.optimization()
    return val
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
    if (this.next.size()) {
        let val = this.next.popBack()
        this.optimization()
        return val
    } else if (this.last.size()) {
        let val = this.last.popBack()
        this.optimization()
        return val
    } else {
        return -1
    }
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */