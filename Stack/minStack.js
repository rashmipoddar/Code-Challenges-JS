// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

var MinStack = function() {
  this.storage = [];
};

MinStack.prototype.push = function(x) {
  if (this.storage.length === 0) {
    this.storage.push({val: x, min: x});
  } else {
    this.storage.push({val: x, min: Math.min(x, this.storage[this.storage.length - 1].min)})
  }
};

MinStack.prototype.pop = function() {
  this.storage.pop();
};

MinStack.prototype.top = function() {
  return this.storage[this.storage.length - 1].val;
};

MinStack.prototype.getMin = function() {
  return this.storage[this.storage.length - 1].min;
};

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());  // -3
console.log(minStack.pop());
console.log(minStack.top());     // 0
console.log(minStack.getMin());  // -2
console.log(minStack.storage);
