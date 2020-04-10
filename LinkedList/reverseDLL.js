class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(val) {
    let node = new ListNode(val);

    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }

    this.tail = node;
  }
}

let dll =  new DoublyLinkedList;
dll.insertNode(1);
dll.insertNode(2);
dll.insertNode(3);
dll.insertNode(4);

// console.log(dll);
// console.log(dll.head);

// function reverse(head) {
//   let node = head;
//   let result = node;
//   while (node) {
//     let nextNode = node.next;
//     node.next = node.prev;
//     node.prev = nextNode;
//     node = nextNode;
//     if (node) {
//       result = node;
//     }
//   }
//   return result;
// }

function reverse(head) {
  let current = head;
  while (current) {
    let currentNext = current.next;
    let currentPrev = current.prev;
    current.next = currentPrev;
    current.prev = currentNext;
    if (!currentNext) {
      break;
    }
    current = current.prev;
  }
  return current;
}

console.log(reverse(dll.head));
