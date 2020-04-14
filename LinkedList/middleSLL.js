// Find the middle node of a singly linked list.
// If there are two middle nodes return the second middle node.

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(val) {
    const node = new ListNode(val);
    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }
};

var middleNode = function(head) {
  let slow = head;
  let fast = head;

  while (fast.next !== null) {
    if (fast.next.next === null) {
      return slow.next;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
  
};

ll = new SinglyLinkedList();
ll.insertNode(1);
ll.insertNode(2);
ll.insertNode(3);
ll.insertNode(4);
ll.insertNode(5);
ll.insertNode(6);

sll = new SinglyLinkedList();
sll.insertNode(1);
sll.insertNode(2);
sll.insertNode(3);
sll.insertNode(4);
sll.insertNode(5);

console.log(middleNode(ll.head));
console.log(middleNode(sll.head));