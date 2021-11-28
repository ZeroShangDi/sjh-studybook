// https://leetcode-cn.com/problems/design-circular-deque/

/**
 * @param {number} k
 */
 var MyCircularDeque = function(k) {
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
MyCircularDeque.prototype.insertFront = function(value) {
    if (this.isFull()) return false
    this.head = (this.head - 1 + this.k) % this.k
    this._v[this.head] = value
    this.cnt++
    return true
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if (this.isFull()) return false
    this._v[this.tail] = value
    this.tail = (this.tail + 1) % this.k
    this.cnt++
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if (this.isEmpty()) return false
    this.head = (this.head + 1) % this.k
    this.cnt--
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if (this.isEmpty()) return false
    this.tail = (this.tail - 1 + this.k) % this.k
    this.cnt--
    return true
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if (this.isEmpty()) return -1
    return this._v[this.head]
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if (this.isEmpty()) return -1
    return this._v[(this.tail - 1 + this.k) % this.k]
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return !this.cnt
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.cnt === this.k
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */