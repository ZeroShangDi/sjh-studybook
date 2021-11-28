// https://leetcode-cn.com/problems/number-of-recent-calls/

// 1、常规: 把t全部放到一个数组中、每次循环便利符合条件的
// 2、进阶: 队列思想、每次入队之后检查哪些需要出队
var RecentCounter = function() {
    this.ts = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.ts.push(t)
    while(this.ts[0] < t - 3000) {
        this.ts.shift()
    }
    return this.ts.length || null
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */