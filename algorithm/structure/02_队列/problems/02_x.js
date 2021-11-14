const { Queue } = require('../src/index')

/**
 * 题目: 用两个队列实现一个栈
 *
 * 解题思路:
 *  1、push
 *    当两个都为null的时候、随意取一个队列push;
 *    当有一个为null的时候、往不为null的队列push;
 *  2、pop
 *    将有值的队列中n-1个元素删除、并添加到null队列;
 *    将有值的队列中第n个元素删除、返回被删除的元素;
 */
