// https://leetcode-cn.com/problems/design-circular-queue/

/**
 * @param {number} k
 */
 var MyCircularQueue = function(k) {
    this.k = k
    this.cnt = 0
    this.head = 0
    this.tail = 0
    this._v = new Array(k)
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) return false
    this._v[this.tail] = value
    this.tail = (this.tail + 1) % this.k
    this.cnt++
    return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) return false
    this.head = (this.head + 1) % this.k
    this.cnt--
    return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) return -1
    return this._v[this.head]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) return -1
    return this._v[(this.tail - 1 + this.k) % this.k]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return !this.cnt
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.cnt === this.k
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */