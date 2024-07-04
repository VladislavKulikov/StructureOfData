class Knot {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(appendValue) {
    const newElement = new Knot(appendValue);
    if (this.head) {
      this.tail.next = newElement;
      this.tail = newElement;
    } else {
      this.head = newElement;
      this.tail = newElement;
    }
    return this;
  }

  forEach(callback) {
    let prevElement = this.head;
    while (prevElement) {
      callback(prevElement?.value);
      prevElement = prevElement.next;
    }
  }
  
  shift() {
    this.head = this.head.next;
  }

  pop() {
    let currentElement = this.head;
    while(currentElement.next.next !== null) {
      currentElement = currentElement.next
    }
    this.tail = currentElement;
    currentElement.next = null;
  }

  unshift(appendValue) {
    const newKnot = new Knot();
    newKnot.value = appendValue;
    newKnot.next = this.head;
    this.head = newKnot;
  }
}