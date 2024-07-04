class Queue {
  constructor() {
    this.queue = [];
  }
  push(item) {
    this.queue.push(item);
  }

  pop() {
    if (this.queue.length == 0) return undefined;
    return this.queue.pop();
  }

  peek() {
    return this.queue[0];
  }

  getAll() {
    let str = "";
    for (let i = 0; i < this.queue.length; i++) {
      str += this.queue[i] + "\n";
    }
    return str;
  }
}
