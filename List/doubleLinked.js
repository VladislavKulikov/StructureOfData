class Knot {
  constructor(value) {
    this.next = null
    this.prev = null
    this.value = value
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null; 
    this.tail = null;
  }

  push(appendValue) {
    const newElement = new Knot(appendValue);
    if(this.head) {
      newElement.prev = this.tail;
      this.tail.next = newElement;
      this.tail = newElement;
    } else {
      this.head = newElement;
      this.tail = newElement;
    }
    return this
  }

  forEach(callback) {
    let prevElement = this.head;
    while (prevElement) {
      callback(prevElement.value);
      prevElement = prevElement.next;
    }
  }

  unshift(appendValue) {
    const newKnot = new Knot();
    this.prev = this.head;
    newKnot.value = appendValue;
    newKnot.next = this.head;
    this.head = newKnot;
  }

  shift() {
    this.head = this.head.next;
    this.head.prev = null;
  }

  pop() {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
}