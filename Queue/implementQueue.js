// Implement Queue data structure with the standard enqueue and dequeue methods.
// What is the complexity of each method?

class MyQueue {
  constructor() {
    this.array = [];
  }

  enqueue(item) {
    this.array.push(item);
    // Time complexity is O(1)
  }

  dequeue() {
    if (this.getLength() === 0) {
      return 'The queue is empty';
    } else {
      let element = this.array.shift();  
      return element;
    }
    // Time complexity is O(n)
  }

  getLength() {
    let length = this.array.length;
    return length;
  }
  // Time complexity is O(1)
}

const queue = new MyQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.array);
console.log(queue.dequeue()); // 1
console.log(queue.array);


