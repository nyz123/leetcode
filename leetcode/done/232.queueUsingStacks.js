/**
 * 232. 用栈实现队列
使用栈实现队列的下列操作：
push(x) -- 将一个元素放入队列的尾部。
pop() -- 从队列首部移除元素。
peek() -- 返回队列首部的元素。
empty() -- 返回队列是否为空。
示例:
MyQueue queue = new MyQueue();
queue.push(1);
queue.push(2);  
queue.peek();  // 返回 1
queue.pop();   // 返回 1
queue.empty(); // 返回 false
说明:
你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 
和 is empty 操作是合法的。
你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，
只要是标准的栈操作即可。
假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。
 */
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.list = [];
  this.front = null;
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  if (this.list.length == 0) this.front = x;
  this.list.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.list.length == 0) throw new Error("list length is 0");
  else {
    let arr = [];
    while (this.list.length !== 0) {
      arr.push(this.list.pop());
    }
    let res = arr.pop();
    if (arr.length > 0) {
      this.front = arr.pop();
      this.list.push(this.front)
    }
    while (arr.length !== 0) {
      this.list.push(arr.pop());
    }
    return res;
  }
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.list.length == 0) throw new Error("list length is 0");
  else return this.front;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.list.length == 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 *
 */
var queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek()); // 返回 1
console.log(queue.pop()); // 返回 1
console.log(queue.empty()); // 返回 false
