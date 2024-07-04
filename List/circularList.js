class Knot {
  constructor(value) {
    this.next = null;
    this.prev = null;
    this.value = value;
  }
}

class CircularList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(appendValue) {
    const newElement = new Knot(appendValue);
    if (this.head) {
      newElement.prev = this.tail;
      this.tail.next = newElement;
      this.tail = newElement;
      this.tail.next = this.head;
      this.head.prev = this.tail;
    } else {
      this.head = newElement;
      this.tail = newElement;
      this.head.prev = this.tail;
      this.tail.next = this.head;
    }
  }

  forEach(callback) {
    let prevElement = this.head;
    do {
      callback(prevElement.value);
      prevElement = prevElement.next;
    } while (prevElement !== this.head);
  }

  unshift(appendValue) {
    const newKnot = new Knot();
    newKnot.value = appendValue;
    newKnot.next = this.head;
    newKnot.prev = this.tail;
    this.head.prev = newKnot;
    this.head = newKnot;
    this.tail.next = this.head;
  }

  shift() {
      this.head.prev = this.tail;
      this.head = this.head.next;
      this.tail.next = this.head;
  }

  pop() {
    this.tail = this.tail.prev;
    this.tail.next = this.head;
    this.head.prev = this.tail;
  }
}
